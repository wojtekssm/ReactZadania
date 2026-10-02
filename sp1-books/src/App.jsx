import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

function App() {
  const [gatunki, setGatunki] = useState([
    {id: 0, name:""},
    {id:1, name:"Powieść"},
    {id:2, name:"Kryminał"},
    {id:3, name:"Fantastyka"},
    {id:4, name:"Biografia"},
  ])

  const [tytul, setTytul] = useState("")
  const [autor, setAutor] = useState("")
  const [gatunek, setGatunek] = useState("")

const handleSubmit = (e) =>{
  e.preventDefault();
  console.log("tytul: " + tytul + "; " + "autor: " + autor + "; " + "gatunek: " + gatunek)
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="bookTitle">Tytuł książki</label>
            <input type='text' className='form-control' id='bookTitle' onChange={(e) => setTytul(e.target.value)}/>
          </div>
          <div className='form-group'>
            <label htmlFor="bookAuthor">Autor książki</label>
            <input type='text' className='form-control' id='bookAuthor' onChange={(e) => setAutor(e.target.value)}/>
          </div>
          <div className='form-group'>
            <label htmlFor="bookTheme">Gatunek</label>
            <select className='form-control' id='bookTheme' onChange={(e) => setGatunek(gatunki[e.target.value].name)}>
              {gatunki.map((gatunek) => (
                <option key={gatunek.id} value={gatunek.id}>{gatunek.name}</option>
              ))}
            </select>
          </div>
          <button type='submit' className='btn btn-primary'>Dodaj</button>
        </form>
    </div>
  )
}

export default App

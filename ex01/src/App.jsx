import './App.css'
import React, { useState } from 'react'

function App() {

  const [contar, setContar] = useState(0)

  const [nombre, setNombre] = useState('')

  const manejarClic = () => {
    setContar(contar + 1)
  }

  const reiniciarClic = () => {
    setContar(0)
  }

  const escucharUser = (e) => {
    setNombre(e.target.value)
  }

  return (
    <>
      <h1>Contador</h1>
      <p>{contar}</p>
      <button onClick={manejarClic}>Aumentar</button>
      <button onClick={reiniciarClic}>Reiniciar</button>
      <input type="text" placeholder='Escriba su nombre' onChange={escucharUser} />
      <p>Tu nombre es: {nombre}</p>
    </>
  )
}

export default App

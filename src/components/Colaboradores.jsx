import { useState, useRef } from 'react';
import { BaseColaboradores } from "../BaseColaboradores";
import "../estilos/stylelist.css";

const Colaboradores = () => {

  const [listaColaboradores, setListaColaboradores] = useState([...BaseColaboradores])
  const [busqueda, setBusqueda] = useState("")
  const nombreRefe = useRef()
  const correoRefe = useRef()
  
  const enterInput = (e) => {
    e.preventDefault()
    setListaColaboradores([...listaColaboradores, {id:Date.now() % 100, nombre:nombreRefe.current.value, correo:correoRefe.current.value}, ])
    nombreRefe.current.value = ""
    correoRefe.current.value = ""
  }

  const resultados = busqueda !== "" ? listaColaboradores.filter((colaborador) => colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase()) || colaborador.correo.toLowerCase().includes(busqueda.toLowerCase())) : listaColaboradores

  return (
    <div className='container'>
      <h1>Lista de Colaboradores</h1>
      <label> Buscar </label>
      <input type="text" onChange={(e) => setBusqueda(e.target.value)} />

      <form onSubmit={enterInput}>
        <label>Usuario</label>
        <input type="text" ref={nombreRefe} required />
            
        <label>Correo</label>
        <input type="email" ref={correoRefe} required />
      
        <button className='btnAdd' type="submit"> Agregar </button>
      </form>

      <ul>
        {
          resultados.map((resultado) => {
            return (
              <li key={resultado.id}>Nombre: {resultado.nombre} - Correo: {resultado.correo} - ID: {resultado.id}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Colaboradores
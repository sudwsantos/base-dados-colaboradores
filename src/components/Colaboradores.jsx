import {useState} from 'react';
import { BaseColaboradores } from "../BaseColaboradores";

const Colaboradores = () => {

  const [nombre, setNombre] = useState('')
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
  const [correo, setCorreo] = useState('')
  

  const newNombre = (e) => {
    setNombre(e.target.value)
  }

  const newCorreo = (e) => {
    setCorreo(e.target.value)
  }

  const enterInput = (e) => {
    e.preventDefault()
    setListaColaboradores([...listaColaboradores, {id:Date.now(), nombre:nombre, correo:correo} ])
  
  }
  return (
    <div>

      <input type="text" placeholder='Ingrese nombre:' onChange={newNombre}/>
      <p>{nombre}</p>
      <input type="text" placeholder='Ingrese correo:' onChange={newCorreo}/>
      <p>{correo}</p>
      <button onClick={enterInput}> Agregar colaborador </button>
      <ul>
        {listaColaboradores.map(colaborador => <li key={colaborador.id}>
          {colaborador.nombre} {colaborador.correo}</li>)}
      </ul>
    </div>
  )
}

export default Colaboradores
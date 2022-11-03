import React, { useState } from 'react';
import { BaseColaboradores } from '../BaseColaboradores';


const Buscador = () => {

    const [buscar, setBuscar] = useState("");
    const [resultBusca, setResultBusca] = useState([]);

    const resBuscar = (e) => {
        e.preventDefault();

        const resultado = BaseColaboradores.filter((ele) =>
        ele.nombre.toLowerCase().includes(buscar.toLowerCase())
        );
        
        if (buscar === "") {
            alert("Por favor ingrese un nombre");
        return;

        } else if (resultado.length === 0) {
            alert("Nombre no encontrado, lo siente!");
        
            return;
        } else {
            setResultBusca(buscar);
            console.log(resultBusca);
        }
        setBuscar("");
    };

  return (

    <div className='buscador'>
        <h3> Buscador</h3>
        <input type="text" placeholder="Ingrese..."
        onChange={(e) => {
            setBuscar(e.target.value);
        }}
        value={buscar}
        />
        <button onClick={resBuscar}>
            Buscar
        </button>
        {resultBusca.map((colaborador) => (
            <p key={colaborador.id}>
                <div className='resultado'>
                    <div>{colaborador.nombre}</div>
                    <div>{colaborador.correo}</div>
                </div>
            </p>
        ))} 
    </div>
  );
};

export default Buscador;
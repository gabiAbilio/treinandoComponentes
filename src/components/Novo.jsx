import React from 'react'

import "./Novo.css"

const Novo = ({titulo, texto, imagem}) => {
  return (
    <div className='Conteudo'>
        
        <h2>{titulo}</h2>

        <div className="linha">
        <img src={imagem} alt={titulo}  />

        <p>{texto}</p>
        </div>
    </div>
  )
}

export default Novo
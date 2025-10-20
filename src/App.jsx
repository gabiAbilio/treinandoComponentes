import { useState } from 'react'

import './App.css'


import Novo from './components/Novo'

import gelo from './assets/gelo.jpg'
import colorado from './assets/colorado.jpg'
import iluminado from './assets/iluminado.jpg'




function App() {

  const titulo1 = "A garota no gelo";
  const texto1 = "Seus olhos estão arregalados... Seus lábios estão entreabertos... Seu corpo está congelado... Mas ela não é a única.Quando um jovem rapaz encontra o corpo de uma mulher debaixo de uma grossa placa de gelo em um parque ao sul de Londres, a detetive Erika Foster é chamada para liderar a investigação de assassinato.";
  const imagem1 = gelo

  const titulo2 = "O garoto de colorado";
  const texto2 ="Abril de 1980. Em uma ilha na costa do Maine, um homem é encontrado morto por um casal de estudantes. Agora, anos depois do ocorrido, os jornalistas locais Dave e Vince reconstroem o caso ao lado de Stephanie, estagiária do Weekly Islander, e apuram o que pode ter acontecido com o indivíduo que ficou conhecido como o Garoto do Colorado";
  const imagem2 = colorado

  const titulo3 = "O iluminado";
  const texto3 = "O iluminado, Stephen King conta a história de Danny Torrance, um menino extraordinário, capaz de ouvir pensamentos, transportar-se no tempo e olhar o passado e o futuro. Danny é um iluminado. Se isso é uma maldição ou uma bênção, ele está prestes a descobrir. O Hotel Overlook já foi palco de festas sofisticadas, noitadas de sexo e bebida, grandes negócios e paixões avassaladoras, mas o tempo passou, arrastando consigo as glórias do passado.";
  const imagem3 = iluminado


 

  return (
   <div className="pai">
   <div className='App'>

    <h1>Livros</h1>
   
    <Novo 
    titulo={titulo1} 
    texto={texto1}
    imagem={imagem1}
    />

    <Novo 
    titulo={titulo2} 
    texto={texto2}
    imagem={imagem2}/>

    <Novo
    titulo={titulo3} 
    texto={texto3}
    imagem={imagem3}
    />
   </div>

   </div>
  )
}

export default App

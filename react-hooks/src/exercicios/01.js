import * as React from 'react';

export default function Exercicio1 () {

  const [name, setName] = React.useState('');
  
  function handleChange(e){
    setName(e.target.value)
     //onCHange é um evento, estamos dizendo q ao acontecer eventoOnChange chama a função handleChange
    //e logo passe o proprio evento que está chamando a função como parametro.
    //.target.value = pegue o valor desse evento
  }

    return (
      <div>  
        <form>
         <label htmlFor="name" > Nome: </label>
          <input onChange={handleChange} id="name" /> 
        </form>
        {name ? <strong> Hello {name}</strong> : 'por favor escreva seu nome' }
      </div>
    )
}
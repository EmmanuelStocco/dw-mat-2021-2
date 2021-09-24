import * as React from 'react'

function Name() {
    const [name, setName] = React.useState('')
    return (
        <div>   
              <label htmlFor="name">Name: </label> 
              <input id="name" value={name} onChange={event => setName(event.target.value)} />   
         </div>
         )
}
//um componente n tem permissão de acessar variavel de estado de outro componente
//como compartilhas valores de um componente com ouitro??
//alteração vai ser aq mais info vai ser guardada de fora
//vamos conectar o componente favouritaAnimal com a função handleAnimal
/*
QUando passa uma var de estado de um componente
interno para um externo, dizeremos
que houve uma evelvação de estado(state lifting)

quando fazemos o opsoto(passar var de estado de componente externo de volta a interno) dizemos que houve um rebaixamento de estadon (state cpçpcatopmn)
 */
function FavoriteAnimal({animal, onAnimalChange}) {
// 💣 delete this, it's now managed by the App  
    //const [animal, setAnimal] = React.useState('')
    return (
    <div>   
           <label htmlFor="animal">Favorite Animal: </label>      
           <input
             id="animal"
             value={animal}
             onChange={onAnimalChange}
        />  
    </div>
    )
  }
// 🐨 uncomment this//

function Display({animal}) {//  
     return <div>{`your favorite animal is: 
     ${animal}!`}</div>
}

export default function Exercicio03() { 
    const [animal, setAnimal] = React.useState('')
/*
    function handleName(event){
        setName(event.target.value)
    }
 
    function handleAnimal(event){
        setAnimal(event.target.value)
    }
*/
    return (
         <form>    
               <Name/>     
                {/* 🐨 pass the animal and onAnimalChange prop here (similar to the Name component above) */}      
                <FavoriteAnimal animal={animal} onAnimalChange={event => setAnimal
                    (event.target.value)} />      
                {/* 🐨 pass the animal prop here */}      
                <Display animal={animal} /> 
        </form>
    )
}

import * as React from 'react'

function FavoriteAnimal({animal, onAnimalChange}) {
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

function Display({animal}) {
  return <div>{`Your favorite animal is ${animal}!`}</div>
}


export default function Exercicio03() {
  const [animal, setAnimal] = React.useState('')
  return (
    <form>
      <FavoriteAnimal animal={animal} onAnimalChange={function (event){
          setAnimal(event.target.value)
      }}/>
      <Display animal={animal} />
    </form>
  )
}
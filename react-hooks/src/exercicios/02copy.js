import * as React from 'react';

export default function Exercicio02() { 

  const [name, setName] = React.useState( 
    () =>  getNameCookies() || ''
  )
  function getNameCookies() {
    console.log('getando cookies')
    return window.localStorage.getItem('react-name')
  } 
 
  const [count, setCount] = React.useState(0)
 
  function handleChange(event) { 
    setName(event.target.value)
  }

  React.useEffect(() => {
    window.localStorage.setItem('react-name', name) 
    setCount(count + 1)
  }, [name]) 

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
      <div>
        Chamadas a useEffect(): {count}
      </div>
    </div>
  )

}
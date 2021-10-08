import React from 'react'

export default function teste4 () {

    //usando lazeinitialize
    const [name, setName] = useState(
        () => getNameCookie()
    )
    
    function getNameCookie() {
        console.log("Getting cookie!")
        return localStorage.getItem("react-name")
      }
 
    function handleChange(event){
        setName(event.target.value)
    }


          return (
            <div>
              <form>
                <label htmlFor="name">Name: </label>
                <input onChange={handleChange} id="name" />
              </form>
            </div>
          )
}
import React from 'react'

export default function Teste2() {
    const[msg, setMsg] = React.useState('')
    const buttonClick = event => {
        setMsg('Este é o segundo componente de teste')
    }
    return (
        <>
            <button onClick={buttonClick}>Clique Aqui</button>
            <div>{msg}</div>
        </>
    )

}
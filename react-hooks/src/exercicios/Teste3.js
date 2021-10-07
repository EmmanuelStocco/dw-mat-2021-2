import React from 'react'

export default function Teste3 () {

    const [mensagem, setMensagem] = React.useState('')

    const botaoClicado = () => {
        setMensagem('Este é o terceiro componente teste')
    }

    return (
        <>
            <button onClick={botaoClicado}> Clique aqui </button>
            <div> {mensagem} </div>
        </>
    )

}
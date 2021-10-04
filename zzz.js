const horaAtual = () => new Date()
console.log('Hora atual', horaAtual())

const fatorial2 = n => {
    let fat = 1 
    for(let i = n; i > 1; i--) fat *= i
    return fat
}
console.log('Fatoral 2', fatorial2(5))


const props = {
    id: 'div1',
    children: 'isso é igual textContent',
    style: {backgroundColor: 'limegreen'}
}

const primeiraDiv = React.createElement('div', props) //criar elemento div com esses elementos

//com babel 
const props = <div className="x" id="div1" style={"backgroundColor: blue"}>Com Babel</div>

const div3 = <div {...props}></div>
const container = React.createElement('div', null, [div3])
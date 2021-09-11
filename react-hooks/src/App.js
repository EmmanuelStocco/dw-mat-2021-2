import { BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Teste1 from './exercicios/Teste1'
import Teste2 from './exercicios/Teste2'
import Exercicio01 from './exercicios/01'

export default function App(){
  return(
    <>
      <h1>React Hooks</h1>



      <BrowserRouter>
      <blockquote>
          <em>Hooks</em> são funções especiais do React que 
          podem ser usadas dentro de componentes para armazenar 
          dados ou para realizar ações atreladas ao ciclo de vida 
          do componente (efeitos colaterais). Essas funções incluem 
          <code>useState</code>, <code>useEffect</code> e
          <code>useRef</code>.
      </blockquote>
      <ul>
          <li><Link to="teste1"> Primeiro teste </Link> </li>
          <li> <Link to="teste2"> Segundo teste </Link>  </li>
          <li> <Link to="ex01"> Exercicio 01 </Link>  </li>
      </ul> 

        <Switch>
          <Route path="teste1"> 
             <Teste1 /> 
          </Route>

          <Route path="teste2"> 
              <Teste2 />
          </Route>
          <Route path="ex01">
              <Exercicio01 /> 
          </Route> 
        </Switch>
      </BrowserRouter>
    </>
  )
}
  
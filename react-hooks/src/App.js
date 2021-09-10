import { BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Teste1 from './exercicios/Teste1'
import Teste2 from './exercicios/Teste2'

export default function App(){
  return(
    <>
      <h1>React Hooks</h1>
      <BrowserRouter>

      <ul>
          <li><Link to="teste1"> Primeiro teste </Link> </li>
          <li> <Link to="teste2"> Segundo teste </Link>  </li>
      </ul> 

        <Switch>
          <Route path="teste1"> <Teste1 />  </Route>
          <Route path="teste2"> <Teste2 /> </Route> 
        </Switch>
      </BrowserRouter>
    </>
  )
}
  

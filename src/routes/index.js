import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import FourZeroFour from "../views/404"
import Home from '../views/Home'
import PokeDetail from "../views/PokeDatail" 
import ScrollToTop from "../components/ScrollToTop"   
export default function Routes(){
    return(
        <Router>
            <ScrollToTop/>
            <Switch>
                <Route path="/" exact >
                    <Home/>
                </Route>

                <Route path="/pokemon/:id">
                    <PokeDetail/>
                </Route>

{/* No se le pasa un Path porque sino esta definido se viene aca automaticamente */}
                <Route>
                    <FourZeroFour/>
                </Route>

            </Switch>
        </Router>
    )
}
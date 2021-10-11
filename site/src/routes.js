import {BrowserRouter, Switch, Route } from 'react-router-dom'

import Pag1 from './pag1/'
import Pag2 from './pag2/'


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path ="/" exact={true} component= {Pag1} />
                <Route path ="/pag2" component= {Pag2} />
            </Switch>
        </BrowserRouter>
    )
}
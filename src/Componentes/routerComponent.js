import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MostrarLista from './Acciones/MostrarLista';
import React from 'react';
import AgregarReservas from './Acciones/AgregarReservas';
import EditarReservas from './Acciones/EditarReservas';
import MostrarLista2 from './Acciones/MostrarLista2'


const AppRouter = () => {
    return (
        <div style={style}>
        <Router>
            <Switch>
                <Route path="/" exact component={MostrarLista}/>
                <Route path="/reservas" exact component={MostrarLista}/>

                 <Route path="/reservas2" exact component={MostrarLista2}/>
                
                <Route path="/add-reservas" component={AgregarReservas} />

                <Route path="/edit-reservas" component={EditarReservas} />
            </Switch>
        </Router>
        </div>

    )
}

const style={
    marginTop:'20px'
}

export default AppRouter;
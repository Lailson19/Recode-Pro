// Dependencias -----------------------------------
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Componentes -----------------------------------
import Menu from './Components/Menu';
import Home from './Components/Main/Home';
import Produtos from './Components/Main/Produtos';
import Lojas from './Components/Main/Lojas';
import Contatos from './Components/Main/Contatos';
import Login from './Components/Main/Login';

// Styles CSS -----------------------------------
import './App.css';


function App() {
  return (
    <div>
      <Menu />
        <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/produtos" component={Produtos} />
              <Route exact path="/lojas" component={Lojas} />
              <Route exact path="/contatos" component={Contatos} />
              <Route exact path="/login" component={Login} />
        </Switch>
    </div>
  );
}

export default App;

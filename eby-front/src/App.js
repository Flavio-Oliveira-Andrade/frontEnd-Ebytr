import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home/index';
import Cadastrar from './pages/cadastro/index';
import Editar from './pages/editar/index';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/cadastar" component={Cadastrar} />
          <Route exact path="/editar" component={Editar} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

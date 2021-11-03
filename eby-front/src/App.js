import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home/index';
import cadastrar from './pages/cadastro/index';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/cadastar" component={cadastrar} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

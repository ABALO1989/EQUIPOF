import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GestionUsuarios from 'pages/GestionUsuarios';
import LayoutInicial from 'layouts/LayoutInicial';

function App() {
  return (
     
      <Router>
        <div>
        <Switch>
          <Route path={"/GestionUsuarios"} component={GestionUsuarios}>
            <LayoutInicial>
              <GestionUsuarios />
            </LayoutInicial>
          </Route>
        </Switch>
        </div>
      </Router>


  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LayoutInicial from 'layouts/LayoutInicial';
//import LayoutUsuarios from 'layouts/LayoutUsuarios';
import Index from 'pages/Index';
import NuevaVenta from 'pages/NuevaVenta';
import AdminVentas from 'pages/AdminVentas';
import Login from 'pages/Login';
import 'styles/stylesVentas.css';
import RegisProduc from 'pages/RegisProduc';


function App() {
  return (
    <div >
      <Router>
        <Switch>
          <LayoutInicial>
            <Route exact path='/nuevaventa'>
              <NuevaVenta />
            </Route>
            <Route exact path='/adminventas'> {/*comentario: crear cada Route para la respectiva pagina */}
              <AdminVentas />
            </Route>
            <Route exact path='/productos'>
              <RegisProduc />
            </Route>
            <Route exact path='/Login'>
              <Login />
            </Route>
            <Route exact path='/'>
              <Index />
            </Route>

          </LayoutInicial>
        </Switch>
      </Router>


    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LayoutInicial from 'layouts/LayoutInicial';
import LayoutUsuarios from 'layouts/LayoutUsuarios';
import Index from 'pages/Index';
import AdminVentas from 'pages/AdminVentas';
import 'styles/stylesVentas.css';


function App() {
  return (
    <div > 
       <Router>
        <Switch>
          <Route path={['/adminventas']}> {/*comentario: agregar separado por comas, las rutas que llevan este layout, son todas exepto el login */}
            <LayoutUsuarios>
              <Switch>
                <Route path='/adminventas'> {/*comentario: crearr cada Route para la respectiva pagina */}
                  <AdminVentas />
                </Route>
              </Switch>
            </LayoutUsuarios>
          </Route>
          <Route path={['/']}>
            <LayoutInicial>
              <Route path='/'>
                <Index />
              </Route>
            </LayoutInicial>
          </Route>
        </Switch>
      </Router>
    
      
    </div>
  );
}

export default App;
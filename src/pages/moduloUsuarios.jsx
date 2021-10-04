import App from "App";
import 'styles/styles.css';

function moduloUsuario() {
return(
    <div>
        <div><h1>Gestion de Usuarios</h1></div>
      <table>
            <tr>
                <th>Nombre de Usuario</th>
                <th>Nombre</th>
                <th>Tipo de Usuario</th>
            </tr>
            <tr>
                <td>agusvie@gmail.com</td>
                <td>Agustin Viera</td>
                <td>Administrador</td>
            </tr>
            <tr>
                <td>anfern@gmail.com</td>
                <td>Andres Fernandez</td>
                <td>Cliente</td>
            </tr>
            <tr>
                <td>crisguti@gmail.com</td>
                <td>Cristina Gutierrez</td>
                <td>Vendedor</td>
            </tr>
            <tr>
                <td>stenao@gmail.com</td>
                <td>Stevan Henao</td>
                <td>Vendedor</td>
            </tr>
            <tr>
                <td>roaura@gmail.com</td>
                <td>Aura Rodriguez</td>
                <td>Vendedor</td>
            </tr>
            <tr>
                <td>magacas@gmail.com</td>
                <td>Magali Castaño</td>
                <td>Ciente</td>
            </tr>
        </table>
    </div>

);
}

export default moduloUsuario;
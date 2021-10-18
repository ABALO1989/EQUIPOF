import React from 'react'
import 'styles/stylesGeneral.css'
import imagenLogo from 'media/logoMueblesTic.png';
import TextField from '@material-ui/core/TextField';
/*import SearchIcon from '@mui/icons-material/Search';*/
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='contenedorDivs'>
                <div className="centrarContBloque">
                    <Link to="/">
                        <img src={imagenLogo} className="imaMain" alt='Logo MueblesTic'></img>
                    </Link>
                </div>
                
                <div className="centrarContBloque">
                    <span >Bienvenidos</span>
                </div>

                <div className="centrarContBloque">
                    <Link to="/nuevaventa">
                        <span>Servicios</span>
                    </Link>
                </div>

                <div className="centrarContBloque">
                    <Link to="/productos">
                        <span >Portafolio</span>
                    </Link>
                </div>

                <div className="centrarContBloque">
                    <TextField id="buscarProducto" label="Producto" /*onChange={(e) => takeDatUser(e)}*/ variant="outlined" color="secondary" />
                </div>

                <div className="centrarContBloque">
                    <Link to="/Login">
                        <button className='buttonPrincipal'>Inicio de sesión</button>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Navbar

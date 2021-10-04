import React from 'react'
import 'styles/stylesGeneral.css'
import imagenLogo from 'media/logoMueblesTic.png';
import TextField from '@material-ui/core/TextField';
/*import SearchIcon from '@mui/icons-material/Search';*/

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='contenedorDivs'>
                <div className="centrarContBloque">
                    <img src={imagenLogo} className="imaMain" alt='Logo MueblesTic'></img>
                </div>
                <div className="centrarContBloque">
                    <span >Bienvenidos</span>
                </div>
                <div className="centrarContBloque">
                    <span>Servicios</span>
                </div>
                <div className="centrarContBloque">
                    <span >Portafolio</span>
                </div>
                <div className="centrarContBloque">
                    <TextField id="buscarProducto" label="Producto" /*onChange={(e) => takeDatUser(e)}*/ variant="outlined" color="secondary"/>
                    
                </div>
                <div className="centrarContBloque">
                    <button className='buttonPrincipal'>Inicio de sesión</button> 
                </div>
            </div>
        </div>
    )
}

export default Navbar

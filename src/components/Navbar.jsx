import React from 'react'
import 'styles/stylesGeneral.css'
import imagenLogo from 'media/logoMueblesTic.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='contenedorDivs'>
                <div >
                    <img src={imagenLogo} className="imaMain" alt='Logo MueblesTic'></img>
                </div>
                <div>
                    <span >Bienvenidos</span>
                </div>
                <div >
                    <span>Servicios</span>
                </div>
                <div >
                    <span >Portafolio</span>
                </div>
                <div >
                    <button className='buttonPrincipal'>Inicio de sesión</button> 
                </div>
            </div>
        </div>
    )
}

export default Navbar

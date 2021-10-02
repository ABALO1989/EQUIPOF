import React from 'react'
import 'styles/stylesGeneral.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='contenedorDivs'>
                <div >
                    <img src='src\media\logoMueblesTic.png' alt='Logo MueblesTic'></img>
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

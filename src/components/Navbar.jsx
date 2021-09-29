import React from 'react'
import 'styles/stylesGeneral.css'
import logo from 'media/MUEBLESTICLOGO.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img
                className='logo'
                src={logo}
                alt="Logo" />

        </div>
    )
}

export default Navbar

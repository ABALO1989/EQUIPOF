import React from 'react'
import logo from 'media/logo.png'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='toggle-btn'>
                <span>&#9776;</span>
                <ul>
                    <li>
                        <img className='logo'
                            src={logo}
                            alt="logo" />
                    </li>
                    <li>Home</li>
                    <li>Productos
                        <ul>
                            <li>Nuevo Producto</li>
                            <li>Admin Productos</li>
                        </ul>
                    </li>
                    <li>Ventas
                        <ul>
                            <li>Nueva Venta</li>
                            <li>Admin Ventas</li>
                        </ul>
                    </li>
                    <li>Usuarios
                        <ul>
                            <li>Crear nuevo</li>
                            <li>Admin usuarios</li>
                        </ul>
                    </li>

                </ul>

            </div>
        </div>
    )
}

export default Sidebar

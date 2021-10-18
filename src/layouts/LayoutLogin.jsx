
import React from 'react'
import Sidebar from 'components/Sidebar'
import Footer from 'components/Footer'
import 'styles/stylesGeneral.css';


const LayoutUsuarios = ({children}) => {
    return (
        <div className='mainContainer'>
            <Sidebar/>
            <main className="mainLogin">{children}</main>
            <Footer />
        </div>
    )
}

export default LayoutUsuarios

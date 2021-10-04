import React, { useState } from 'react';
import 'styles/login.css';
import iconoLogin from 'media/iconoLogin.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const Login = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    function takeDatUser(event) {
        setUser(event.target.value)
    }
    function takeDatPass(event) {
        setPass(event.target.value)
    }

    function ingresoSistema() {
        if (user === 'Mueble' && pass === 'Muebles') {
            console.log('Ingreso Exitoso');
        } else {
            console.log('Ingreso errado');
        }
    }
    return (
        <div>
            <div className="contLogin login">
                <div className="tituloLogin">MUEBLES TIC</div>
                <img src={iconoLogin} className="contIma" alt="IconoIngreso" />
                <div className="inputsLogin">
                    <TextField id="inputLogin" label="Usuario" onChange={(e) => takeDatUser(e)} variant="outlined" color="secondary" />
                    <TextField id="inputLogin" type="password" onChange={(e) => takeDatPass(e)} label="Password" variant="outlined" color="secondary" />
                    <Button variant="outlined" type="submit" onClick={() => ingresoSistema()} color="Secondary">Ingresar</Button>
                </div>
            </div>
        </div>
    );
}
export default Login


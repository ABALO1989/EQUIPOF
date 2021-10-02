import React, { useState } from 'react';
import 'styles/login.css';
import iconoLogin from 'media/iconoLogin.png';
import TextField from '@material-ui/core/TextField';


const Login = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    function takeDatUser(event) {
        setUser(event.target.value)
    }
    function takeDatPass(event){
        setPass(event.target.value)
    }
    
    function capturarDatos() {
        console.log({ user });
        console.log({ pass });
    }

    return (
        <div>
            <div>Muebles Tic</div>
            <div className="contLogin login">
                <img src={iconoLogin} className="contIma" alt="IconoIngreso" />
                <div className="inputsLogin">
                    <TextField id="inputLogin" label="Usuario" onChange={(e) => takeDatUser(e)} variant="outlined" />
                    <TextField id="inputLogin" type="password" onChange={(e) => takeDatPass(e)} label="Password" variant="outlined" />
                <button className="buttonLogin" type="submit" onClick={() => capturarDatos()}>Ingresar</button>
                </div>
            </div>
        </div>
    );
}
export default Login



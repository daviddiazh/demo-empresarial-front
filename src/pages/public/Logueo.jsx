import React from 'react'
import { useState } from 'react'
import { app } from '../../service/firebase';

export const Logueo = (props) => {

    const [ isRegistrando, setIsRegistrando ] = useState(false)

    const crearUsuario = (correo, contraseña) => {
        app.auth().createUserWithEmailAndPassword(correo, contraseña)
        .then((usuarioFirebase) => {
            props.setUsuario(usuarioFirebase);
        });
    }

    const iniciarSesion = (correo, contraseña) => {
        app.auth().signInWithEmailAndPassword(correo, contraseña)
        .then((usuarioFirebase) => {
            props.setUsuario(usuarioFirebase);
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const correo = e.target.emailField.value;
        const contraseña = e.target.passwordField.value;

        if(isRegistrando){
            crearUsuario(correo, contraseña);
        }

        if(!isRegistrando){
            iniciarSesion(correo, contraseña);
        }
    }

    return (
        <div>
            <form onSubmit={submitHandler} className='mt-5 py-5 px-5 form-ingreso'>
                <h1 style={{margin: "50px"}}>{ isRegistrando ? "Regístrate" : "Iniciar Sesión" }</h1>
                <input type="email" id="emailField" placeholder='Correo Electrónico' className="form-control" style={{margin: "10px 0"}}/>
                <input type="password" id="passwordField" placeholder='Contraseña' className="form-control" /> 
                <button type='submit' className="btn btn-primary" style={{background: "#0d6efd", border: "none", margin: "30px 15px"}}>
                    {isRegistrando ? "Regístrate" : "Iniciar sesión"}
                </button>
                <button type='submit' onClick={() => setIsRegistrando(!isRegistrando)} className="btn btn-light" style={{border: "none", margin: "30px 0"}}>
                { isRegistrando 
                    ? "¿Ya tienes cuenta? ¡Inicia sesión!" 
                    : "¿No tienes cuenta? ¡Registrate, es gratis!"
                }
            </button>
            </form>
        </div>
    )
}

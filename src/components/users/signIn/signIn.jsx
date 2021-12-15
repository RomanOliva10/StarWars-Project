import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {Link} from "react-router-dom";

//Estilos
import './signIn.css';
/* Pruebas */
import axios from 'axios';
import { Fragment } from 'react/cjs/react.production.min';
import Nav from '../../layout/nav/Nav';

const validador = false;


export default function SignIn() {
    
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const initialState = true;
    const [stateTest, setStateTest] = useState(initialState);

    const changeVisibilityPass = (e) => {

        let icons = e.currentTarget.children;
        let i = 0, length = icons.length;

        for(i; i < length; i++){
            icons[i].classList.toggle("disabled");
        }

        setStateTest((stateTest)?false:true);
    }
    
    
    const onSubmit = datosUser => {
        // Si estamos acá es porque completaron todos los campos
        // Una vez hecho el back habría que enviar {datosUser} al back
        // Por el momento sólo mostramos los valores en un console.log
        
        //Luego de llamar al axios hay que ver que renderizar
        

        /* console.log(datosUser); */
    }

    return (
        <Fragment>
            <Nav />
            <div className="wrapper"></div>
            <div className="wrapper-two"></div>
            <div className="container-all">
                <div className="form-area" >
                    <h1 className='signin-title'>sign in</h1>

                    {validador && 

                        <div className='container-error'>
                            <p>The credentials you entered are incorrect.</p>
                        </div>

                    }

                    <form method="post" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                        
                        <div className="form-group">
                            <input className={`signin-input ${errors.name && "error"}`} placeholder='Email' type="text" {...register("name", { required: true })}/>
                            {errors.name && <span className="error">This field is required</span>}
                        </div>

                        <div className="form-group">

                            <div className="container-input-pass">

                                <input
                                id='password' 
                                className={errors.password && "error"}
                                placeholder='Password'
                                type={(stateTest)?"password" : "text"} 
                                {...register("password", { required: true })} 
                                />
                                

                                <span className="icon-signin" onClick={changeVisibilityPass}>
                                    <i class="fas fa-eye disabled"></i>
                                    <i class="fas fa-eye-slash"></i>
                                </span>
                            </div>
                            {errors.password && <span className="error">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <button classname={"btn-signin"} type="submit">Sign in</button>
                        </div>

                    </form>


                    <Link className="btn" to="/register">Create an Account</Link>
                </div>
            </div>
        </Fragment>
    );
}
import React, { useRef, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import {Link, useLocation, useNavigate} from "react-router-dom";

import { Fragment } from 'react/cjs/react.production.min';
import axios from 'axios';
import { SessionContext } from '../../../../context/sessionContext';

//styles
import './signIn.css';

//Prueba
const validador = false;

export default function SignIn({change}) {

    const { setSession} = useContext(SessionContext);
    
    const navigate = useNavigate();
    const url = useLocation();

    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const initialState = true;
    const [stateTest, setStateTest] = useState(initialState);
    const [loginError, setLoginError] = useState(validador);

    const changeVisibilityPass = (e) => {

        let icons = e.currentTarget.children;
        let i = 0, length = icons.length;

        for(i; i < length; i++){
            icons[i].classList.toggle("disabled");
        }

        setStateTest((stateTest)?false:true);
    }
    
    const onSubmit = userData => {
        axios
        .post("https://swapi-tukiti.herokuapp.com/api/users/login", userData)
        .then(res => {
            if (res.data.error) {
                setLoginError([true, res.data.error]);
            } else {
                setLoginError([false, '']);

                // if user was created, store the token in localStorage
                localStorage.setItem('user', JSON.stringify(res.data.user));
                localStorage.setItem('token', JSON.stringify(res.data.token));
                
                setSession({ exists: true, token: res.data.token, user: res.data.user });

                alert(`Welcome back ${res.data.user.name} !!`);

                
                if (url.pathname !== '/login') {
                    navigate(url.pathname);
                } else {
                    navigate('/');
                }
                
            }
        })
        .catch(error => console.log(error));
    }

    return (

                <div className="container-form-login">
                    <div  className='form-area-login' >
                        <h1 className='sign-title'>Sign In</h1>

                        {loginError && 

                            <div className='container-error'>
                                <p>The credentials you entered are incorrect.</p>
                            </div>

                        }

                        <form  className="signin" method="post" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                            
                            <div className="form-group-sign">
                                <input className={`signin-input ${errors.email && "error"}`} placeholder='Email' type="text" {...register("email", { required: true })}/>
                                {errors.email && <span className="error">This field is required</span>}
                            </div>

                            <div className="form-group-sign ">
                                    <input
                                    id='password' 
                                    className={errors.password && "error"}
                                    placeholder='Password'
                                    type={(stateTest)?"password" : "text"} 
                                    {...register("password", { required: true })} 
                                    />
                                    {errors.password && <span className="error">This field is required</span>}

                                    <span className="icon-signin" onClick={changeVisibilityPass}>
                                        <i className="fas fa-eye disabled"></i>
                                        <i className="fas fa-eye-slash"></i>
                                    </span>
                            </div>

                            <div className="container-btn-login ">
                                <button className={"btn-login"} type="submit"><i class="fas fa-sign-in-alt"></i></button>
                            </div>

                            <div className="btn-create" onClick={change} >Create an Account</div>

                        </form>


                    </div>
                </div>


    );
}
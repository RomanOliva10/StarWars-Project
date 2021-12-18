import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import {Link, useNavigate} from "react-router-dom";

//Estilos
import './signIn.css';
/* Pruebas */
import { Fragment } from 'react/cjs/react.production.min';
import Nav from '../../layout/nav/Nav';
import axios from 'axios';
import { SessionContext } from '../../../context/sessionContext';

export default function SignIn() {
    const { session, setSession} = useContext(SessionContext);
    
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [stateTest, setStateTest] = useState(true);
    const [loginError, setLoginError] = useState([false, '']);

    const changeVisibilityPass = (e) => {
        let icons = e.currentTarget.children;
        let i = 0, length = icons.length;

        for(i; i < length; i++){
            icons[i].classList.toggle("disabled");
        }

        setStateTest((stateTest) ? false : true);
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

                navigate('/');
            }
        })
        .catch(error => console.log(error));
    }

    return (
        <Fragment>
            <Nav />
            <div className="container-form">
                <div className="form-area" >
                    <h1 className='signin-title'>Sign In</h1>
                    {loginError[0] && 
                        <div className='container-error'>
                            <p>{loginError[1]}</p>
                        </div>
                    }
                    <form method="post" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                        <label htmlFor="email">Email: </label>
                            <input className={`signin-input ${errors.name && "error"}`} placeholder='Email' type="text" {...register("email", { required: true })}/>
                            {errors.name && <span className="error">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <div className="container-input-pass">
                            <label htmlFor="password">Password: </label>
                                <input
                                id='password' 
                                className={errors.password && "error"}
                                placeholder='Password'
                                type={(stateTest)?"password" : "text"} 
                                {...register("password", { required: true })} 
                                />
                                <span className="icon-signin" onClick={changeVisibilityPass}>
                                    <i className="fas fa-eye"></i>
                                    <i className="fas fa-eye-slash disabled"></i>
                                </span>
                            </div>
                            {errors.password && <span className="error">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <button className={"btn"} type="submit">Sign in</button>
                        </div>
                    </form>
                    <Link className="btn-create" to="/register">Create an Account</Link>
                </div>
            </div>
        </Fragment>
    );
}
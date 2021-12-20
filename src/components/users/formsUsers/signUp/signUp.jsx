import React, { Fragment, useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

// styles
import './signUp.css';

// import context
import { SessionContext } from '../../../../context/sessionContext';


export default function SignUp({change, signin}) {
    const { session, setSession } = useContext(SessionContext);

    const navigate = useNavigate();

    let [emailError, setEmailError] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    //Se usa como referencia el password para luego en el campo de confirm password poder compararlo
    const password = useRef();
    password.current = watch("password");
    
    const onSubmit = userData => {
        // send data to API
        axios
        .post("https://swapi-tukiti.herokuapp.com/api/users/create", userData)
        .then(res => {
            if (res.data.error) {
                setEmailError(true);
            } else if (res.data.token) {
                // reset mail error
                setEmailError(false);

                // if user was created, store the token in localStorage
                localStorage.setItem('user', JSON.stringify(res.data.user));
                localStorage.setItem('token', JSON.stringify(res.data.token));
                
                setSession({ exists: true, token: res.data.token, user: res.data.user });

                alert('User Created!!');

                navigate('/');
            } else {
                console.log("Unknown Error");
            }
        })
        .catch(error => console.log(error));
    }

    return (
            <div className="container-form-register hidden" ref={signin}>
                <div className="form-area-signup">
                    <h1 className='sign-title signup-title-responsive' >Sign Up</h1>
                    <form className='signup' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group-sign">
                            <input 
                                className={errors.name && "error"}
                                type="text"
                                placeholder='name' 
                                {...register("name", { required: true })} 
                            />
                            {errors.name && <span className="error">This field is required</span>}
                        </div>

                        <div className="form-group-sign">
                            <input 
                                className={errors.email && "error"}
                                type="text"
                                placeholder='email'  
                                {...register("email", { required: true })} 
                            />
                            {errors.email && <span className="error">This field is required</span>}
                            {emailError && <span className="error">The email already exists</span>}
                        </div>

                        <div className="form-group-sign">
                            <input 
                                className={errors.password && "error"}
                                type="password" 
                                placeholder='password' 
                                {...register("password", { required: true , minLength: 8 })} 
                            />
                            {errors.password && errors.password.type === "required" && <span className="error">This field is required</span>}
                            {errors.password && errors.password.type === "minLength" && <span className='error'>Min Length 8</span>}
                        </div>

                        <div className="form-group-sign">
                            <input 
                                className={errors.confirmPassword && "error"}
                                type="password" 
                                placeholder='confirm password' 
                                {...register("confirmPassword", { required: true, validate: (value) => value === password.current, minLength: 8 })} 
                            />
                            {errors.confirmPassword && errors.confirmPassword.type === "required" && <span className="error">This password confirm field is required</span>}
                            {errors.confirmPassword && errors.confirmPassword.type === "validate" && <span className='error'>The passwords do not match</span>}
                        </div>

                        <div className="container-btn-signup">
                            <button className="btn-signup" type="submit">Register</button>
                        </div>
                        <div className="btn-create" onClick={change} >Already registered? Click to SIGN IN</div>
                    </form>
                </div>
            </div>
    );
}
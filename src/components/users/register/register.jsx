import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import './register.css';
/* Pruebas */
import Nav from '../../layout/nav/Nav';
import { Fragment } from 'react/cjs/react.production.min';

export default function Register(){
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    //Se usa como referencia el password para luego en el campo de confirm password poder compararlo
    const password = useRef();
    password.current = watch("password");
    
    const onSubmit = userData => {
        // Si estamos acá es porque completaron todos los campos
        // Una vez hecho el back habría que enviar {userData} al back
        // Por el momento sólo mostramos los valores en un console.log

        

        /* console.log(userData); */
    }

    return (
        <Fragment>
            <Nav/>
            <div className="container-form">
                <div className="form-area">
                    <h1 className='signin-title' >Register</h1>
                    <form method="post" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="name">Name: </label>
                            <input 
                                className={errors.name && "error"}
                                type="text" 
                                {...register("name", { required: true })} 
                            />
                            {errors.name && <span className="error">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email: </label>
                            <input 
                                className={errors.email && "error"}
                                type="text" 
                                {...register("email", { required: true })} 
                            />
                            {errors.email && <span className="error">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password: </label>
                            <input 
                                className={errors.password && "error"}
                                type="password" 
                                {...register("password", { required: true , minLength: 8 })} 
                            />
                            {errors.password && errors.password.type === "required" && <span className="error">This field is required</span>}
                            {errors.password && errors.password.type === "minLength" && <span className='error'>Min Length 8</span>}{/* Falta probar */}
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password: </label>
                            <input 
                                className={errors.confirmPassword && "error"}
                                type="password" 
                                {...register("confirmPassword", { required: true, validate: (value) => value === password.current, minLength: 8 })} 
                            />
                            {errors.confirmPassword && errors.confirmPassword.type === "required" && <span className="error">This password confirm field is required</span>}
                            {errors.confirmPassword && errors.confirmPassword.type === "validate" && <span className='error'>The passwords do not match</span>}
                        </div>

                        <div className="form-group">
                            <button className={"btn"} type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}
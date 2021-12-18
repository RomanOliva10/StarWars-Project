import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

// import styles
import '../../layout/styles/form.css';

// import components
import Nav from '../../layout/nav/Nav';
import Error from '../../layout/error/Error';
import Spinner from '../../layout/spinner/Spinner';
import Footer from '../../layout/footer/footer'

export default function UsersEdit() {
    const navigate = useNavigate();

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
        defaultValues: {
            id: null,
            name: "",
            email: "",
            password: null,
            confirmPassword: null,
        }
    });

    // user state
    let [user, setUser] = useState({});

    // error not found state
    let [error404, setError404] = useState(false);
    let [editError, setEditError] = useState([false, '']);

   
    //Se usa como referencia el password para luego en el campo de confirm password poder compararlo
    const password = useRef();
    password.current = watch("password");

    // get ID from URL
    const location = useLocation();
    let email = location.pathname.split('/')[3];

    useEffect(() => {    
        // const URL = `http://localhost:4000/api/users/${email}`;
        const URL = `https://swapi-tukiti.herokuapp.com/api/users/${email}`;

        axios.get(URL)
        .then(res => {  
            if (res.status === 200 && res.data.data !== false) {
                res.data.password = null;
                setUser(res.data);
                
                setError404(false);
            } else {
                setError404(true);
            }
        })
        .catch(error => {
            setError404(true);
            console.log(error);
        });   
    }, [email]);

    useEffect(() => {   
        // set values
        for (const key in user) {
            setValue(key, user[key]);
        }
    }, [user, setValue]);
    
    const onSubmit = char => {
        // const URL = `http://localhost:4000/api/users/edit/${email}`;
        const URL = `https://swapi-tukiti.herokuapp.com/api/users/edit/${email}`;
        
        axios.put(URL, char)
        .then(res => {  
            console.log("res:");
            console.log(res);
            if (res.data.error) {
                setEditError([true, res.data.error]);
            } else {
                setEditError([false, '']);
                alert("User edited!");
                navigate('/users');
            }
        })
        .catch(error => {
            console.log(error);
        });   
    }

    return (
        <Fragment>
            <Nav />
            <div className="container-form">
                {
                    error404 ?
                    <Error msg="not found" code="404" /> :
                    user.length === 0 ?
                    <Spinner msg="loading" /> :
                    <Fragment>
                        <div className="form-area">
                            <h1 className='signin-title'>Edit User</h1>
                            {editError[0] && 
                                <div className='container-error'>
                                    <p>{editError[1]}</p>
                                </div>
                            }
                            <form onSubmit={handleSubmit(onSubmit)}>
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
                                        placeholder='Empty to keep previous password'
                                        {...register("password", { minLength: 8 })} 
                                    />
                                    {errors.password && errors.password.type === "minLength" && <span className='error'>Min Length 8</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm Password: </label>
                                    <input 
                                        placeholder='Empty to keep previous password'
                                        className={errors.confirmPassword && "error"}
                                        type="password" 
                                        {...register("confirmPassword", { validate: (value) => {
                                            return password.current === '' || value === password.current}, minLength: 8 })} 
                                    />
                                    {errors.confirmPassword && errors.confirmPassword.type === "minLength" && <span className='error'>Min Length 8</span>}
                                    {errors.confirmPassword && errors.confirmPassword.type === "validate" && <span className='error'>The passwords do not match</span>}
                                </div>

                                <div className="form-group">
                                    <button className="btn" type="submit">Edit User</button>
                                </div>
                            </form>
                        </div>
                    </Fragment>
                }            
            </div>
            <Footer/>
        </Fragment>       
    );
}
import React, { Fragment, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

// import styles
import '../layout/styles/form.css';

// import components
import Nav from '../layout/nav/Nav';
import Error from '../layout/error/Error';
import Spinner from '../layout/spinner/Spinner';

export default function CharactersEdit() {
    const navigate = useNavigate();

    const { register, handleSubmit , setValue, formState: { errors } } = useForm({
        defaultValues: {
            id: null,
            name: "",
            description: null,
            height: "",
            mass: "",
            hair_color: "",
            skin_color: "",
            eye_color: "",
            birth_year: "",
            gender: "",
            url: null,
            created: "",
            edited: "",
            deletedAt: null,
            PlanetId: null
        }
    });

    // character state
    let [character, setCharacter] = useState({});

    // error not found state
    let [error404, setError404] = useState(false);

    // get ID from URL
    const location = useLocation();
    let id = location.pathname.split('/')[3];

    useEffect(() => {    
        const URL = `http://localhost:4000/api/characters/${id}`;
        // const URL = `https://swapi-tukiti.herokuapp.com/api/characters/${id}`;

        axios.get(URL)
        .then(res => {  
            if (res.status === 200 && res.data.data !== false) {
                setCharacter(res.data);
                
                setError404(false);
            } else {
                setError404(true);
            }
        })
        .catch(error => {
            setError404(true);
            console.log(error);
        });   
    }, [id]);

    useEffect(() => {   
        // set values
        for (const key in character) {
            setValue(key, character[key]);
        }
    }, [character, setValue]);
    
    const onSubmit = char => {
        const URL = `http://localhost:4000/api/characters/edit/${id}`;
        // const URL = `https://swapi-tukiti.herokuapp.com/api/characters/edit/${id}`;

        axios.put(URL, char)
        .then(res => {  
            alert("Character edited!");
            navigate('/characters');
        })
        .catch(error => {
            console.log(error);
        });   
    }

    return (
        <Fragment>
            <Nav />
            <div className="container-home">
                {
                    error404 ?
                    <Error msg="not found" code="404" /> :
                    character.length === 0 ?
                    <Spinner msg="loading" /> :
                    
                    <div className="form-area">
                        <h3>edit character</h3>
                        <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                            {/* Name */}
                            <div className="form-group">
                                <label htmlFor="name">Name: </label>
                                <input
                                    autoFocus
                                    className={errors.name && "error"}
                                    type="text" 
                                    {...register("name", { required: true })} 
                                />
                                {errors.name && <span className="error">This field is required</span>}
                            </div>
                            {/* Description */}
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea 
                                    className={errors.description && "error"}
                                    {...register("description", { required: true })}
                                ></textarea> 
                                {errors.description && <span className="error">This field is required</span>}
                            </div> 
                            {/* Height */}
                            <div className="form-group">
                                <label htmlFor="height">Height: </label>
                                <input 
                                    className={errors.height && "error"}
                                    type="text" 
                                    {...register("height", { required: true })} 
                                />
                                {errors.height && <span className="error">This field is required</span>}
                            </div>
                            {/* Mass */}
                            <div className="form-group">
                                <label htmlFor="mass">Mass: </label>
                                <input 
                                    className={errors.mass && "error"}
                                    type="text" 
                                    {...register("mass", { required: true })} 
                                />
                                {errors.mass && <span className="error">This field is required</span>}
                            </div>
                            {/* Hair Color */}
                            <div className="form-group">
                                <label htmlFor="hair_color">Hair Color: </label>
                                <input 
                                    
                                    className={errors.hair_color && "error"}
                                    type="text" 
                                    {...register("hair_color", { required: true })} 
                                />
                                {errors.hair_color && <span className="error">This field is required</span>}
                            </div>
                            {/* Skin Color */}
                            <div className="form-group">
                                <label htmlFor="skin_color">Skin Color: </label>
                                <input 
                                    
                                    className={errors.skin_color && "error"}
                                    type="text" 
                                    {...register("skin_color", { required: true })} 
                                />
                                {errors.skin_color && <span className="error">This field is required</span>}
                            </div>
                            {/* Eye Color */}  
                            <div className="form-group">
                                <label htmlFor="eye_color">Eye Color: </label>
                                <input 
                                    
                                    className={errors.eye_color && "error"}
                                    type="text" 
                                    {...register("eye_color", { required: true })} 
                                />
                                {errors.eye_color && <span className="error">This field is required</span>}
                            </div>
                            {/* Birth Year */}  
                            <div className="form-group">
                                <label htmlFor="birth_year">Birth Year: </label>
                                <input 
                                    
                                    className={errors.birth_year && "error"}
                                    type="text" 
                                    {...register("birth_year", { required: true })} 
                                />
                                {errors.birth_year && <span className="error">This field is required</span>}
                            </div>
                            {/* Gender */}
                            <div className="form-group">
                                <label htmlFor="gender">Gender</label>
                                <select 

                                    className={errors.gender && "error"}
                                    {...register("gender", { required: true })}
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="n/a">n/a</option>
                                </select>
                                {errors.gender && <span className="error">This field is required</span>}
                            </div>
                            {/* Image */}
                            {/* <div className="form-group">
                                <label htmlFor="image">Image: </label>
                                <input 
                                    accept="image/gif, image/png, image/jpeg"
                                    className={errors.image && "error"}
                                    type="file" 
                                    {...register("image", { required: true })} 
                                />
                                {errors.image && <span className="error">This field is required</span>}
                            </div> */}
                            
                            <div className="form-group">
                                <button type="submit">editar</button>
                            </div>
                        </form>
                    </div>
                }            
            </div>
        </Fragment>       
    );
}
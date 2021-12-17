import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// import styles
import '../layout/styles/form.css';

// import components
import Nav from '../layout/nav/Nav';
import Footer from '../layout/footer/footer'

export default function CharactersCreate() {
    const navigate = useNavigate();

    const { register, handleSubmit , formState: { errors } } = useForm();
    
    const onSubmit = char => {
        // const URL = `http://localhost:4000/api/characters/create`;
        const URL = `https://swapi-tukiti.herokuapp.com/api/characters/create`;
        let formData = new FormData();
        
        for (const key in char) {
            formData.set(key, char[key]);
        }
        formData.append('imgFile', char.image[0]);

        console.log(formData.get('imgFile'));

      
        axios.post(URL, formData)
        .then(res => {  
            console.log(char);
            alert("Character created!");
            navigate('/characters');
        })
        .catch(error => {
            console.log(error);
        });      
    }

    return (
        <Fragment>
            <Nav />
            <div className="wrapper"></div>
            <div className="wrapper-two"></div>
            <div className="container-form">
                <div className="form-area">
                    <h1>Add Character</h1>
                    <form method="post" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
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
                        <div className="form-group">
                            <label htmlFor="image">Image: </label>
                            <input 
                                className={errors.image && "error"}
                                type="file" 
                                name="image"
                                {...register("image", { required: true })} 
                            />
                            {errors.image && <span className="error">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <button className="btn" type="submit">Create</button>
                        </div>
                    </form>
                </div>   
            </div>
            <Footer/>
        </Fragment>       
    );
}
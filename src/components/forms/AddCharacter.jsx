import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import homeworlds from './mocks/homeworlds';
import './form.css';

const AddCharacter = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = char => {
        // Si estamos acá es porque completaron todos los campos
        // Una vez hecho el back habría que enviar {char} al back
        // Por el momento sólo mostramos los valores en un console.log
        console.log(char);
    }

    return (
        <div className="form-area">
            <h3>Add Character</h3>
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
                    <label htmlFor="gender">Gender</label>
                    <select 
                        className={errors.gender && "error"}
                        {...register("gender", { required: true })}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="n/a">n/a</option>
                    </select>
                    {errors.gender && <span className="error">This field is required</span>}
                </div>
                
                <div className="form-group">
                    <label htmlFor="homeworld">Homeworld</label>
                    <select 
                        className={errors.homeworld && "error"}
                        {...register("homeworld", { required: true })}
                    >
                        {homeworlds.map(e => (
                            <option key={e.id} value={e.id}>{e.name}</option>
                        ))}
                    </select>
                    {errors.homeworld && <span className="error">This field is required</span>}
                </div>

                <div>
                    <label htmlFor="films">Films</label>
                    <div className="check-group">
                        <input type="checkbox" {...register("films")} value="1" />
                        <span>Episode IV - 'A new hope'</span>
                    </div>
                    <div className="check-group">
                        <input type="checkbox" {...register("films")} value="2" />
                        <span>Episode V - 'The Empire Strikes Back'</span>
                    </div>
                    <div className="check-group">
                        <input type="checkbox" {...register("films")} value="3" />
                        <span>Episode VI - 'The Return of Jedi'</span>
                    </div>
                    <div className="check-group">
                        <input type="checkbox" {...register("films")} value="4" />
                        <span>Episode VII -'The Forece Awakens'</span>
                    </div>
                    <div className="check-group">
                        <input type="checkbox" {...register("films")} value="5" />
                        <span>Episode VIII -'The Last Jedi'</span>
                    </div>
                    <div className="check-group">
                        <input type="checkbox" {...register("films")} value="6" />
                        <span>Episode IX -'The Rise of Skywalker'</span>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="species">Specie</label>
                    <input 
                        className={errors.species && "error"}
                        type="text" 
                        {...register("species", { required: true })} 
                    />
                    {errors.species && <span className="error">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="img">image</label>
                    <input 
                        className={errors.img && "error"}
                        type="file" 
                        {...register("img", { required: true })} 
                    />
                    {errors.img && <span className="error">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea 
                        className={errors.description && "error"}
                        {...register("description", { required: true })}
                    ></textarea> 
                    {errors.description && <span className="error">This field is required</span>}
                </div>

                <div className="form-group">
                    <button type="submit">Add Character</button>
                </div>
            </form>
        </div>
    );
}
 
export default AddCharacter;
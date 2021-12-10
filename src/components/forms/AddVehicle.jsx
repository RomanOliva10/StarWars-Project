import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './form.css';
import affiliations from '../forms/mocks/affiliations';

const AddVehicle = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const vehicle = {};

    const onSubmit = vehicle => {
        // Si estamos acá es porque completaron todos los campos
        // Una vez hecho el back habría que enviar {vehicle} al back
        // Por el momento sólo mostramos los valores en un console.log
        console.log(vehicle);
    }


    return (
        <div className="form-area">
            <h3>Add Vehicle</h3>
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
                    <label htmlFor="affiliations">Affiliations</label>
                    <select 
                        multiple
                        className={errors.affiliations && "error"}
                        {...register("affiliations", { required: true })}
                    >
                        {affiliations.map((e, i) => (
                            <option key={i} value={e}>{e}</option>
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
                    <label htmlFor="img">Image</label>
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
                    <button type="submit">Add Vehicle</button>
                </div>
            </form>
        </div>
    );
}
 
export default AddVehicle;
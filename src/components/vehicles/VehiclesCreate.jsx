import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// import styles
import '../layout/styles/form.css';

// import components
import Nav from '../layout/nav/Nav';

export default function VehiclesCreate() {
    const navigate = useNavigate();

    const { register, handleSubmit , formState: { errors } } = useForm();
    
    const onSubmit = vehicle => {
        // const URL = `http://localhost:4000/api/vehicles/create`;
        const URL = `https://swapi-tukiti.herokuapp.com/api/vehicles/create`;

        let formData = new FormData();
        
        for (const key in vehicle) {
            formData.set(key, vehicle[key]);
        }
        formData.append('imgFile', vehicle.image[0]);

        console.log(formData.get('imgFile'));
      
        axios.post(URL, formData)
        .then(res => {  
            console.log(vehicle);
            alert("Vehicle created!");
            navigate('/vehicles');
        })
        .catch(error => {
            console.log(error);
        });      
    }

    return (
        <Fragment>
            <Nav />
            <div className="container-home">
                <div className="form-area">
                    <h3>add vehicle</h3>
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
                        {/* Model */}
                        <div className="form-group">
                            <label htmlFor="model">Model</label>
                            <input
                                className={errors.model && "error"}
                                type="text" 
                                {...register("model", { required: true })} 
                            />
                            {errors.model && <span className="error">This field is required</span>}
                        </div> 
                        {/* Manufacturer */}
                        <div className="form-group">
                            <label htmlFor="manufacturer">Manufacturer: </label>
                            <input 
                                className={errors.manufacturer && "error"}
                                type="text" 
                                {...register("manufacturer", { required: true })} 
                            />
                            {errors.manufacturer && <span className="error">This field is required</span>}
                        </div>
                        {/* Cost */}
                        <div className="form-group">
                            <label htmlFor="cost_in_credits">Cost: </label>
                            <input 
                                className={errors.cost_in_credits && "error"}
                                type="text" 
                                {...register("cost_in_credits", { required: true })} 
                            />
                            {errors.cost_in_credits && <span className="error">This field is required</span>}
                        </div>
                        {/* Length */}
                        <div className="form-group">
                            <label htmlFor="length">Length: </label>
                            <input 
                                
                                className={errors.length && "error"}
                                type="text" 
                                {...register("length", { required: true })} 
                            />
                            {errors.length && <span className="error">This field is required</span>}
                        </div>
                        {/* Speed */}
                        <div className="form-group">
                            <label htmlFor="max_atmosphering_speed">Speed: </label>
                            <input 
                                
                                className={errors.max_atmosphering_speed && "error"}
                                type="text" 
                                {...register("max_atmosphering_speed", { required: true })} 
                            />
                            {errors.max_atmosphering_speed && <span className="error">This field is required</span>}
                        </div>
                        {/* Crew */}  
                        <div className="form-group">
                            <label htmlFor="crew">Crew: </label>
                            <input               
                                className={errors.crew && "error"}
                                type="text" 
                                {...register("crew", { required: true })} 
                            />
                            {errors.crew && <span className="error">This field is required</span>}
                        </div>
                        {/* Passengers */}  
                        <div className="form-group">
                            <label htmlFor="passengers">Passengers: </label>
                            <input 
                                
                                className={errors.passengers && "error"}
                                type="text" 
                                {...register("passengers", { required: true })} 
                            />
                            {errors.passengers && <span className="error">This field is required</span>}
                        </div>
                        {/* Capacity */}  
                        <div className="form-group">
                            <label htmlFor="cargo_capacity">Capacity: </label>
                            <input 
                                
                                className={errors.cargo_capacity && "error"}
                                type="text" 
                                {...register("cargo_capacity", { required: true })} 
                            />
                            {errors.cargo_capacity && <span className="error">This field is required</span>}
                        </div>
                        {/* Consumables */}  
                        <div className="form-group">
                            <label htmlFor="consumables">Consumables: </label>
                            <input 
                                
                                className={errors.consumables && "error"}
                                type="text" 
                                {...register("consumables", { required: true })} 
                            />
                            {errors.consumables && <span className="error">This field is required</span>}
                        </div>
                        {/* Class */}  
                        <div className="form-group">
                            <label htmlFor="vehicle_class">Class: </label>
                            <input 
                                
                                className={errors.vehicle_class && "error"}
                                type="text" 
                                {...register("vehicle_class", { required: true })} 
                            />
                            {errors.vehicle_class && <span className="error">This field is required</span>}
                        </div>
                        {/* Image */}
                        <div className="form-group">
                            <label htmlFor="image">Image: </label>
                            <input 
                                accept="image/gif, image/png, image/jpeg"
                                className={errors.image && "error"}
                                type="file" 
                                name="image"
                                {...register("image", { required: true })} 
                            />
                            {errors.image && <span className="error">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <button type="submit">crear</button>
                        </div>
                    </form>
                </div>   
            </div>
        </Fragment>       
    );
}
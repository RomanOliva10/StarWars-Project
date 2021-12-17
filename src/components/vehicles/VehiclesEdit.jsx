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
import Footer from '../layout/footer/footer'

export default function VehiclesEdit() {
    const navigate = useNavigate();

    const { register, handleSubmit , setValue, formState: { errors } } = useForm({
        defaultValues: {
            id: null,
            name: "",
            model: "",
            manufacturer: "",
            cost_in_credits: "",
            length: "",
            max_atmosphering_speed: "",
            crew: "",
            passengers: "",
            cargo_capacity: "",
            consumables: "",
            vehicle_class: "",
            url: null,
            created: "",
            edited: "",
            deletedAt: null
        }
    });

    // vehicle state
    let [vehicle, setVehicle] = useState({});

    // error not found state
    let [error404, setError404] = useState(false);

    // get ID from URL
    const location = useLocation();
    let id = location.pathname.split('/')[3];

    useEffect(() => {    
        // const URL = `http://localhost:4000/api/vehicles/${id}`;
        const URL = `https://swapi-tukiti.herokuapp.com/api/vehicles/${id}`;

        axios.get(URL)
        .then(res => {  
            if (res.status === 200 && res.data.data !== false) {
                setVehicle(res.data);
                
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
        for (const key in vehicle) {
            setValue(key, vehicle[key]);
        }
    }, [vehicle, setValue]);
    
    const onSubmit = vehicle => {
        // const URL = `http://localhost:4000/api/vehicles/edit/${id}`;
        const URL = `https://swapi-tukiti.herokuapp.com/api/vehicles/edit/${id}`;
        
        let formData = new FormData();
        
        for (const key in vehicle) {
            formData.set(key, vehicle[key]);
        }
        formData.append('imgFile', vehicle.image[0]);

        console.log(formData.get('imgFile'));
      
        axios.put(URL, formData)
        .then(res => {  
            alert("Vehicle edited!");
            navigate('/vehicles');
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
                    vehicle.length === 0 ?
                    <Spinner msg="loading" /> :
                    <Fragment>
                        <div className="form-area">
                            <h3>edit vehicle</h3>
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
                                    <textarea 
                                        className={errors.model && "error"}
                                        {...register("model", { required: true })}
                                    ></textarea> 
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
                    </Fragment>
                }            
            </div>
            <Footer/>
        </Fragment>       
    );
}
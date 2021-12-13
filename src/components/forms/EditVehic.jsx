import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import homeworlds from './mocks/homeworlds';
import './form.css';
/* Pruebas */
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function EditVehic({edit, data}) {
    
    
    const location = useLocation();
    let id = location.pathname.split('/')[2];
    
    let [oldData,setNewData] = useState({});
    
    const { register, handleSubmit ,reset, setValue, formState: { errors } } = useForm({
        defaultValues: {
            name:"",
            model:"",
            cost_in_credits:"",
            length:"",
            cargo_capacity:"",
            max_atmosphering_speed:"",
            manufactured:"",
            created:""
        }
    });
    
    useEffect(() => {
        if(data.results.length !== 0){

            setNewData(data.results[id-1]);

            // setValue("name",oldData.name);
            for (const key in oldData) {
                //  alert(key);
                // alert(oldData[key]);
                
                
                setValue(key,oldData[key]);
                
            }
        }
    },[data, oldData]); 
    

    const onSubmit = vehicle => {
        // Si estamos acá es porque completaron todos los campos
        // Una vez hecho el back habría que enviar {char} al back
        // Por el momento sólo mostramos los valores en un console.log

        vehicle.url = `https://swapi.dev/api/vehicles/${id}/`;
        
        edit(vehicle,id-1);
        // alert(char.url);

        reset({});

        alert("Vehicle edited!");

        /* console.log(char); */
    }

    return (
        <div className="form-area">
            <h3>Edit Vehicle</h3>
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
                    <label htmlFor="model">Model: </label>
                    <input 
                        className={errors.model && "error"}
                        type="text" 
                        {...register("model", { required: true })} 
                    />
                    {errors.model && <span className="error">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="cost_in_credits">Cost: </label>
                    <input 
                        className={errors.cost_in_credits && "error"}
                        type="text" 
                        {...register("cost_in_credits", { required: true })} 
                    />
                    {errors.cost_in_credits && <span className="error">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="length">Length: </label>
                    <input 
                        className={errors.length && "error"}
                        type="text" 
                        {...register("length", { required: true })} 
                    />
                    {errors.length && <span className="error">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="cargo_capacity">Capacity: </label>
                    <input 
                        className={errors.cargo_capacity && "error"}
                        type="text" 
                        {...register("cargo_capacity", { required: true })} 
                    />
                    {errors.cargo_capacity && <span className="error">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="max_atmosphering_speed">Max Speed: </label>
                    <input 
                        className={errors.max_atmosphering_speed && "error"}
                        type="text" 
                        {...register("max_atmosphering_speed", { required: true })} 
                    />
                    {errors.max_atmosphering_speed && <span className="error">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="manufacturer">Manufactured: </label>
                    <input 
                        className={errors.manufacturer && "error"}
                        type="text" 
                        {...register("manufacturer", { required: true })} 
                    />
                    {errors.manufacturer && <span className="error">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="created">Created: </label>
                    <input 
                        className={errors.created && "error"}
                        type="text" 
                        {...register("created", { required: true })} 
                    />
                    {errors.created && <span className="error">This field is required</span>}
                </div>
             
                {/* <div className="form-group">
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
                </div> */}
                

                {/* <div>
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
                </div> */}

                {/* <div className="form-group">
                    <label htmlFor="img">Image</label>
                    <input 
                        className={errors.img && "error"}
                        type="file" 
                        {...register("img", { required: true })} 
                    />
                    {errors.img && <span className="error">This field is required</span>}
                </div> */}

                {/* <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea 
                        className={errors.description && "error"}
                        {...register("description", { required: true })}
                    ></textarea> 
                    {errors.description && <span className="error">This field is required</span>}
                </div> */}

                <div className="form-group">
                    <button type="submit">Edit Vehicle</button>
                </div>
            </form>
        </div>
    );
}
 

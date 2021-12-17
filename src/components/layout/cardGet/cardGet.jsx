import React from "react";
import './cardGet.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//Components
import { Fragment } from "react/cjs/react.development";

//Description mock para rellenar
const textMock = "TEXT MOCK was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of the famed Jedi master was one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall to evil and convinced the Jedi had to end, Luke sought exile on a distant world, ignoring the galaxy’s pleas for help. But his solitude would be interrupted – and Luke Skywalker had one final, momentous role to play in the struggle between good and evil.";

export default function CardGet(prop){

        let {name, description, height, mass, hair_color, skin_color, eye_color, birth_year, gender, image, id} = prop.data;
        let{model, transport, manufacturer, cost_in_credits, length, max_atmosphering_speed, cargo_capacity, vehicle_class} = prop.data;

        let character = (prop.type === "character")?true:false;
        let vehicle = (prop.type === "vehicle")?true:false;

        //Funcion para eliminar en la api
        const navigate = useNavigate();
        function fnDelete(){
    
            const URL = `https://swapi-tukiti.herokuapp.com/api/${(character)?`characters`:`vehicles`}/delete/${id}`;
    
            axios.delete(URL)
            .then(res => {  
                alert("Character deleted!");
                navigate('/characters');
            })
            .catch(error => {
                console.log(error);
            });      
        }

    return(
        <div className="container-get">

            <div className="img-container-get">
                {/* Agregar Condicional para renderizar imagen */}
                <img className="img-get" src={`https://swapi-tukiti.herokuapp.com/imgs/${(character)?`characters`:`vehicles`}/${image}`} alt="" />
                <div className="effect-gradient"></div>
            </div>

            <div className="description-container-get">

                <div className="container-title-get">
                    <hr />
                    <h2 className="title-get">{name}</h2>
                    <hr />
                </div>

                <div className="description-get">

                    {character && 
                        <Fragment>
                            <div className="col-description-get">
                                <h4>Gender</h4>
                                <span>{gender}</span>
                            </div>
                            <hr />
                            <div className="col-description-get">
                                <h4>Heigth</h4>
                                <span>{height}</span>
                            </div>
                            <hr />
                            <div className="col-description-get">
                                <h4>Mass</h4>
                                <span>{mass}</span>
                            </div>
                            <hr />
                            <div className="col-description-get">
                                <h4>Eye Color</h4>
                                <span>{eye_color}</span>
                            </div>
                            <hr />
                            <div className="col-description-get">
                                <h4>Skin Color</h4>
                                <span>{skin_color}</span>
                            </div>
                            <hr />
                            <div className="col-description-get">
                                <h4>Hair Color</h4>
                                <span>{hair_color}</span>
                            </div>
                            <hr />
                            {/* <div className="col-description-get">
                                <h4>Species</h4>
                                <span>{specie}</span>
                            </div> */}
                            
                            {/* <div className="col-description-get">
                                <h4>Home World</h4>
                                <span>data</span>
                            </div> */}
                        
                            <div className="col-description-get">
                                <h4>Birth Year</h4>
                                <span>{birth_year}</span>

                            </div>

                        </Fragment>   
                    }

                    {vehicle && 
                        <Fragment>
                            <div className="col-description-get">
                                <h4>Model</h4>
                                <span>{model}</span>
                            </div>                           
                            <hr />
                            <div className="col-description-get">
                                <h4>Cost</h4>
                                <span>{cost_in_credits}</span>
                            </div>
                            <hr />
                            <div className="col-description-get">
                                <h4>Length</h4>
                                <span>{length}</span>
                            </div>
                            <hr />
                            <div className="col-description-get">
                                <h4>Manufacturer</h4>
                                <span>{manufacturer}</span>
                            </div>
                            <hr />
                            <div className="col-description-get">
                                <h4>capacity</h4>
                                <span>{cargo_capacity}</span>
                            </div>
                            <hr />
                            <div className="col-description-get">
                                <h4>Class</h4>
                                <span>{vehicle_class}</span>
                            </div> 
                            <hr />
                            <div className="col-description-get">
                                <h4>Speed</h4>
                                <span>{max_atmosphering_speed}</span>

                            </div>

                        </Fragment>   
                    }

                </div>


                {character && 
                <div className="text-description-get">
                    <p>{(description)?description:textMock}</p>
                </div>
                }

                <div className="container-buttons-get">

                    <Link to={`/${prop.type}s/edit/${id}`}><i className="fas fa-edit"></i></Link>
                    <button onClick={fnDelete} ><i className="fas fa-trash-alt"></i></button>

                </div>

            </div>

        </div>
    );
}
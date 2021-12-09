import React, { Fragment, useEffect, useState } from "react";
import '../characters-get/characters-get.css';
import FilmsCarousel from "../characters-get/films-carousel/film-carousel";
import axios from "axios";
import { useLocation } from "react-router";
import Spinner from "../spinner/spinner";
import Error from '../error/error';
import { imgVehicles2 } from '../imgData';

const dataFilm = [

    {   
        title: "STAR WARS: THE PHANTOM MENACE",
        img:"https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Phantom-Menace-I-Poster_f5832812.jpeg?region=0%2C250%2C678%2C340&width=600"
    },

    {   
        title: "STAR WARS: ATTACK OF THE CLONES",
        img:"https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Attack-Clones-II-Poster_53baa2e7.jpeg?region=0%2C188%2C678%2C340&width=600"
    },

    {   
        title: "STAR WARS: REVENGE OF THE SITH",
        img:"https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Revenge-Sith-III-Poster_646108ce.jpeg?region=0%2C356%2C746%2C374&width=600"
    },

    {   
        title: "STAR WARS: A NEW HOPE",
        img:"https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=40%2C219%2C586%2C293"
    },

    {   
        title: "STAR WARS: THE EMPIRE STRIKES BACK",
        img:"https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Empire-Strikes-Back-V-Poster_878f7fce.jpeg?region=25%2C299%2C612%2C306&width=600"
    },

    {   
        title: "STAR WARS: RETURN OF THE JEDI",
        img:"https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Return-Jedi-VI-Poster_a10501d2.jpeg?region=9%2C210%2C624%2C312&width=600"
    }
]

function click(e){

    let column1 = document.querySelector(".description-card-get");
    let column2 = document.querySelector(".column-description-card");

    column1.classList.toggle("disabled");
    column2.classList.toggle("disabled");
        
} 

export default function VehiclesGet(){
    // Obtenemos la ubicacion para extraer el ID
    const location = useLocation();
    let id = location.pathname.split('/')[2];
    
    let [vehicle, setVehicle] = useState([]);
    let [error404, setError404] = useState(false);

    useEffect(() => {
        const URL = `https://swapi.dev/api/vehicles/${id}`;

        axios
        .get(URL)
        .then(data => {  
            console.log(data);
            if (data.status === 200) {
                setVehicle(data);
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
    
    console.log(vehicle);
    return(
        <Fragment>
        {
            error404 ?
            <Error msg="not found" code="404" /> :
            vehicle.length === 0 ?
            <Spinner msg="loading" /> :
            <div className="main-get">
            <div className="line-card">
                <div className="container-card-get" onClick={click}>

                    <div className="container-img-description">
                        <img className="img-main-description" src={`http://localhost:3000/${imgVehicles2[id]}`} /> 
                        <div className="efecto"></div>
                    </div>

                
                    <div className="description-card-get">
                        <h3>{vehicle.data.name}</h3>
                        <p>{vehicle.data.description}</p>
                    </div>

                    <div className="column-description-card disabled">

                        <div className="description-physical-card-get">

                            <h3>Description</h3>

                            <div className="row-physical-card">
                                <span className="physical-category-card">Model:</span>
                                <span>{vehicle.data.model}</span>
                            </div>

                            <div className="row-physical-card">
                                <span className="physical-category-card" >Class:</span>
                                <span>{vehicle.data.vehicle_class}</span>
                            </div>

                            <div className="row-physical-card">
                                <span className="physical-category-card" >Cost:</span>
                                <span>{vehicle.data.cost_in_credits}</span>
                            </div>

                            <div className="row-physical-card">
                                <span className="physical-category-card">Length:</span>
                                <span>{vehicle.data.length}</span>
                            </div>

                            <div className="row-physical-card">
                                <span className="physical-category-card" >Capacity:</span>
                                <span>{vehicle.data.cargo_capacity}</span>
                            </div>    

                            <div className="row-physical-card disabled">
                                <span className="physical-category-card" >Max speed:</span>
                                <span>{vehicle.data.max_atmosphering_speed}</span>
                            </div>

                        </div>

                        <div className="info-bio-card-get">

                            <h3>Biography</h3>

                            <div className="row-bio-card">
                                <span>Manufacturer:</span>
                                <span>{vehicle.data.manufacturer}</span>
                            </div>
                            <div className="row-bio-card">
                                <span>Created:</span>
                                <span>{vehicle.data.created}</span>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

           <FilmsCarousel data={dataFilm}/>

        </div>
        }
        </Fragment>
    );
}
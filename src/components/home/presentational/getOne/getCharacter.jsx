import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import Spinner from "../../../spinner/spinner";
import Error from '../../../error/error';
import { imgCharacters } from '../../../mocks/imgData';

//Style
import './get.css';
//DataMock
import dataFilm from "../../../mocks/films";
//Components
import FilmsCarousel from "./filmsCarousel/filmCarousel";
import DescriptionColumn from "./description/descriptionColumn/descriptionColumn";


export default function CharacterGet(prop){

    console.log(prop.dataP);
    // Obtenemos la ubicacion para extraer el ID
    const location = useLocation();
    let id = location.pathname.split('/')[2];
    
    let [character, setCharacter] = useState({
    });

    let [error404, setError404] = useState(false);

    useEffect(() => {
        
        if(prop.dataP.results.length !== 0){
            setCharacter(prop.dataP.results[id - 1]);
        }
        
    },[id, prop.dataP]);
    


    /* 
    useEffect(() => {
        const URL = `https://swapi.dev/api/people/${id}`;

        axios
        .get(URL)
        .then(data => {  
            console.log(data);
            if (data.status === 200) {
                setCharacter(data);
                setError404(false);
            } else {
                setError404(true);
            }
        })
        .catch(error => {
            setError404(true);
            console.log(error);

        });
    }, [id]); */
    
    return(
        <Fragment>
        
            {/*  error404 ?
            <Error msg="not found" code="404" /> :
            character.length === 0 ?
            <Spinner msg="loading" /> :
              */}
            <div className="main-get">

                <div className="line-card">

                    <div className="container-card-get" >

                        <div className="container-img-description">
                        <img className="img-main-description" src={`http://localhost:3000/${imgCharacters[id-1]}`} alt={"Character"} /> 
                        
                    </div>


                        <DescriptionColumn character={character} type={prop.type}/>


                    </div>
                </div>

                <FilmsCarousel data={dataFilm}/>

        </div>
        
        </Fragment>
    );
}


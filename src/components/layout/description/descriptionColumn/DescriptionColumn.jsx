import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// import styles
import './descriptionColumn.css'

//components
import RowDescription from "../rowDescription/rowDescription";

export default function DescriptionColumn({ character, type }) {

    //Divido la data que se trajo en los prop
    let {name} = character;
    let dataPrimary, dataSecondary;

    dataPrimary = (type === "character") ?
        changeDataCharacter(0, character) :
        changeDataVehicle(0, character);

    dataSecondary = (type === "character")?
        changeDataCharacter(1,character) : 
        changeDataVehicle(1,character);
        
        const navigate = useNavigate();
    function fnDelete(){

        const URL = `https://swapi-tukiti.herokuapp.com/api/${type}s/delete/${character.id}`;

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
        <div className="container-description">
            
            <h3 className="name-character">{name}</h3>
            <hr />

        

            <div className={`column-secondary-description`}>

                <div className="description-physical-card-get">

                    <h3 className="secondary-title"><i className="fas fa-circle-notch"></i> Description</h3>

                        <div className="data-secondary-card">
                            {dataPrimary.map((row, indx) => (<RowDescription key={indx} data={row} className="row-physical"/>))}
                        </div>

                        
                
                    </div>

                <div className="info-bio-card-get">

                    <h3 className="secondary-title"><i className="fas fa-circle-notch"></i> Biography</h3>

                    <div className="data-secondary-card">
                    {dataSecondary.map((row, indx) => (<RowDescription key={indx} data={row} className="row-biography"/>))}
                    </div>


                </div>
                <Link to={`/${type}s/edit/${character.id}`}>Editar</Link>
                <button onClick={fnDelete} >Delete</button>
            </div>

        </div>
        
    );
}

//Conversion de Datos para las columnas

function changeDataCharacter(type, data){

    let resp =[];
    
    if(type === 0){

        resp =  [
            {   category: "Gender",
                info : data.gender},
            {   category:"Heigth",
                info : data.height},
            {   category: "Mass",
                info: data.mass},
            {   category: "Eye Color",
                info : data.eye_color},
            {   category : "Skin Color",
                info : data.skin_color},
            {   category : "Species",
                info : data.species}
        ];

    }else if (type === 1){

        resp = [
            {   category : "Homeworld",
                info : data.homeworld},
            {   category : "Birth year",
                info : data.birth_year}
        ];

    }

    return resp;

}

function changeDataVehicle(type, data){

    let resp =[];
    console.log("LA DATA ENTRA EN LA FUNCION");
    console.log(data);
    if(type === 0){

        resp =  [
            {   category: "Model",
                info : data.model},
            {   category:"Class",
                info : data.vehicle_lass},
            {   category: "Cost",
                info: data.cost_in_credits},
            {   category: "Length",
                info : data.length},
            {   category : "Capacity",
                info : data.cargo_capacity},
            {   category : "Max Speed",
                info : data.max_atmosphering_speed}
        ];

    }else if (type === 1){

        resp = [
            {   category : "Manufacturer",
                info : data.manufacturer},
            {   category : "Created",
                info : data.created}
        ];

    }

    console.log(resp);

    return resp;

}
import React from 'react';
import "./styles.css";
import Card from './card';
import Spinner from './spinner/spinner';
import { imgVehicles, imgCharacters } from './imgData';


function GetAll({dataP, dataV}) {   
    return (
        <div className="getAll">
            {
                dataV.results.length === 0 ? 
                <Spinner msg="loading vehicles" />:
                dataV.results.map((ele,idx)=> <Card key={idx} type="Vehicles" datos={ele} img={imgVehicles[idx]}/>)
            }
            {
                dataP.results.length === 0 ? 
                <Spinner msg="loading characters" />:
                dataP.results.map((ele,idx)=> <Card key={idx} type="Characters" datos={ele} img={imgCharacters[idx]}/>)
            }
        </div>
    )
}

export default GetAll;
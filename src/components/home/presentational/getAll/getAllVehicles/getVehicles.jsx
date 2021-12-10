import React from 'react';
import { imgVehicles } from '../../../../mocks/imgData';

import "../getAll.css";

import Card from '../card';
import Spinner from "../../../../spinner/spinner";
function GetAllVehicles({dataV}) {
    return (
        <div className="getAll">
            {
                dataV.results.length === 0 ? 
                <Spinner msg="loading vehicles" />:
                dataV.results.map((ele,idx)=> <Card key={idx} type="Vehicles" datos={ele} img={imgVehicles[idx]}/>)
            }
        </div>
    )
}

export default GetAllVehicles;
import React from 'react';
import { Link } from "react-router-dom";
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
            <Link className="add-card" to='/AddVehicle'>
                    <div className="add-container-img">
                        <div className='Add'>
                            <i class="fas fa-plus"></i>
                            <span>Add</span>
                        </div>
                        <p> Vehicle </p>
                    </div>
            </Link>
        </div>
    )
}

export default GetAllVehicles;
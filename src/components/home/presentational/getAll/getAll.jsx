import React from 'react';
import "./getAll.css";
import Card from './card';
import Spinner from "../../../spinner/spinner";
import { imgVehicles, imgCharacters } from '../../../mocks/imgData';
import { Link } from 'react-router-dom';


function GetAll({dataP, dataV}) {   
    return (
        <div className="getAll">
            {
                dataV.results.length === 0 ? 
                <Spinner msg="loading vehicles" />:
                dataV.results.map((ele,idx)=> <Card key={idx} type="Vehicles" datos={ele} img={imgVehicles[idx]} pos={idx+1}/>)
            }
            {
                dataP.results.length === 0 ? 
                <Spinner msg="loading characters" />:
                dataP.results.map((ele,idx)=> <Card key={idx} type="Characters" datos={ele} img={imgCharacters[idx]} pos={idx+1}/>)
            }
            <Link className="add-card" to='/AddCharacters'>
                    <div className="add-container-img">
                        <div className='Add'>
                            <i class="fas fa-plus"></i>
                            <span>Add</span>
                        </div>
                        <p> Character </p>
                    </div>
            </Link>
            <Link className="add-card" to='/AddVehicle'>
                    <div className="add-container-img">
                        <div className='Add'>
                            <i class="fas fa-plus"></i>
                            <span>Add</span>
                        </div>
                        <p> vehicle </p>
                    </div>
            </Link>
        </div>
    )
}

export default GetAll;
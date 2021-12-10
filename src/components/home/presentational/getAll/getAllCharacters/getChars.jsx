import React from 'react';
import { Link } from "react-router-dom";
import { imgCharacters } from '../../../../mocks/imgData';

import "../getAll.css";

import Card from '../card';
import Spinner from "../../../../spinner/spinner";


function GetAllCharacters({dataP}) {
    return (
        <div className="getAll">
            {
                dataP.results.length === 0 ? 
                <Spinner msg="loading characters" />:
                dataP.results.map((ele,idx)=> <Card key={idx} type="Characters" datos={ele} img={imgCharacters[idx]}/>)
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
        </div>
    )
}

export default GetAllCharacters;
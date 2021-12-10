import React from 'react';
import { imgCharacters } from './imgData';

import "./styles.css";

import Card from './card';
import Spinner from './spinner/spinner';


function GetAllCharacters({dataP}) {
    return (
        <div className="getAll">
            {
                dataP.results.length === 0 ? 
                <Spinner msg="loading characters" />:
                dataP.results.map((ele,idx)=> <Card key={idx} type="Characters" datos={ele} img={imgCharacters[idx]}/>)
            }
        </div>
    )
}

export default GetAllCharacters;
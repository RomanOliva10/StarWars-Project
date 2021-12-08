import React, {useState} from 'react';
import "./styles.css";
import Vehicles from '../../mocks/vehicles';
import Characters from '../../mocks/characters';
import Card from './card';

function GetAll() {
    return (
        <div className="getAll">
            {Vehicles.map((el,indx) => <Card data={el} key={indx}/>)}
            {Characters.map((el,indx) => <Card data={el} key={indx}/>)}
        </div>
    )
}

export default GetAll;

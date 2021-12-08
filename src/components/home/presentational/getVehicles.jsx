import React, {useState} from 'react';
import "./styles.css";
import Card from './card';
import axios from "axios";

const baseURLV = "https://swapi.dev/api/vehicles/";

const imgVehicles = [
    "./img/vehicles/Death-Star.jpeg",
    "./img/vehicles/Death-Star-II.jpeg",
    "./img/vehicles/millennium-falcon.jpeg",
    "./img/vehicles/Y-Wing-Fighter.jpeg",
    "./img/vehicles/X-Wing-Fighter.jpeg",
    "./img/vehicles/Star-Destroyer.jpeg",
    "./img/vehicles/TIE-Fighter.jpeg",
    "./img/vehicles/Death-Star.jpeg",
    "./img/vehicles/vaders-tie-fighter.jpeg",
    "./img/vehicles/sandcrawler.jpeg"
];


function GetAllVehicles() {
    const [dataV,setDataV] = useState({ results: [] });

    axios
    .get(baseURLV)
    .then((res) => {
        setDataV(res.data);
    })
    .catch((err) => err);

    return (
        <div className="getAll">
            
            {dataV.results.map((ele,idx)=> <Card key={idx} datos={ele} img={imgVehicles[idx]}/>)}
            
        </div>
    )
}

export default GetAllVehicles;
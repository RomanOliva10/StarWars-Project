import React, {useState} from 'react';
import "./styles.css";
import Card from './card';
import axios from "axios";

const baseURLV = "https://swapi.dev/api/vehicles/";
const baseURLP = "https://swapi.dev/api/people/";

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

const imgCharacters = [
    "./img/characters/luke-skywalker.jpeg",
    "./img/characters/Anakin-Skywalker.jpeg",
    "./img/characters/c-3po.jpeg",
    "./img/characters/r2-d2.jpeg",
    "./img/characters/Darth-Vader.jpeg",
    "./img/characters/leia.jpeg",
    "./img/characters/Obi-Wan-Kenobi.jpeg",
    "./img/characters/Anakin-Skywalker.jpeg",
    "./img/characters/chewbacca.jpeg",
    "./img/characters/han-solo.jpeg",
    "./img/characters/Yoda.jpeg"
];

function GetAll() {
    const [dataV,setDataV] = useState({ results: [] });
    const [dataP,setDataP] = useState({ results: [] });

    axios
    .get(baseURLV)
    .then((res) => {
        setDataV(res.data);
    })
    .catch((err) => err);

    axios
    .get(baseURLP)
    .then((res) => {
        setDataP(res.data);
    })
    .catch((err) => err);
    return (
        <div className="getAll">
            
            {dataV.results.map((ele,idx)=> <Card key={idx} datos={ele} img={imgVehicles[idx]}/>)}
            {dataP.results.map((ele,idx)=> <Card key={idx} datos={ele} img={imgCharacters[idx]}/>)}
            
        </div>
    )
}

export default GetAll;

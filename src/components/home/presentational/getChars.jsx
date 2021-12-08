import React, {useState} from 'react';
import "./styles.css";
import Card from './card';
import axios from "axios";

const baseURLP = "https://swapi.dev/api/people/";

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

function GetAllCharacters() {
    const [dataP,setDataP] = useState({ results: [] });

    axios
    .get(baseURLP)
    .then((res) => {
        setDataP(res.data);
    })
    .catch((err) => err);
    return (
        <div className="getAll">
            
            {dataP.results.map((ele,idx)=> <Card key={idx} datos={ele} img={imgCharacters[idx]}/>)}
            
        </div>
    )
}

export default GetAllCharacters;
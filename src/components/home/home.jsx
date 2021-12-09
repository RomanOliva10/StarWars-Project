import React, { Fragment, useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import axios from 'axios';

import "./home.css"

import GetAll from './presentational/getAll'
import GetAllCharacters from './presentational/getChars';
import GetAllVehicles from './presentational/getVehicles';
import CharactersGet from './presentational/characters-get/characters-get';

export default function Home() {

    const [dataV,setDataV] = useState({ results: [] });
    const [dataP,setDataP] = useState({ results: [] });

    useEffect(() => {
        const baseURLV = "https://swapi.dev/api/vehicles/";
        const baseURLP = "https://swapi.dev/api/people/";

        axios.all([
            axios.get(baseURLV),
            axios.get(baseURLP)
        ])
        .then(axios.spread((vehicles, chars) => {  
            setDataV(vehicles.data);
            setDataP(chars.data);
        }))
        .catch(error => console.log(error));
    }, []);


    return (
        <div className="container-home">
            <div className="options">
                <Link to="/">All Databank</Link>
                <Link to="/Characters">All Characters</Link>
                <Link to="/Vehicles">All vehicles</Link>
            </div>
            <Fragment>
            <Routes>
                <Route path="/" element={<GetAll dataP={dataP} dataV={dataV} />} />
                <Route path="/Characters" element={<GetAllCharacters dataP={dataP} />} />
                <Route path="/Characters/:id" element={<CharactersGet />} />
                <Route path="/Vehicles" element={<GetAllVehicles dataV={dataV} />} />
            </Routes>
            </Fragment>
        </div>
    )
}

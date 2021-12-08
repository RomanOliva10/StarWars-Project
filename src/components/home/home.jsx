import React from 'react';
import { Fragment } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import "./home.css"
import GetAll from './presentational/getAll'
import GetAllCharacters from './presentational/getChars';
import GetAllVehicles from './presentational/getVehicles';

export default function Home() {
    return (
        <div className="container-home">
            <div className="options">
                <Link to="/All">All Databank</Link>
                <Link to="/Characters">All Characters</Link>
                <Link to="/Vehicles">All vehicles</Link>
            </div>
            <Fragment>
            <Routes>
                <Route path="/All" element={<GetAll/>} />
                <Route path="/Characters" element={<GetAllCharacters/>} />
                <Route path="/Vehicles" element={<GetAllVehicles/>} />
            </Routes>
            </Fragment>
        </div>
    )
}

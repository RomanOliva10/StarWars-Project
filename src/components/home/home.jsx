import React, { Fragment, useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import axios from 'axios';

import "./home.css"

import GetAll from './presentational/getAll/getAll'
import GetAllCharacters from './presentational/getAll/getAllCharacters/getChars';
import GetAllVehicles from './presentational/getAll/getAllVehicles/getVehicles';
import CharacterGet from './presentational/getOne/getCharacter';
import VehicleGet from './presentational/getOne/getVehicle';
import AddCharacter from '../forms/AddCharacter';
import AddVehicle from '../forms/AddVehicle';
import EditChars from '../forms/EditChars';
import EditVehic from '../forms/EditVehic';


export default function Home() {

    const [dataV,setDataV] = useState({ results: [] });
    const [dataP,setDataP] = useState({ results: [] });

    const guardarCharacter = (data) => {
        setDataP({...dataP,results:[...dataP.results,{...data,id:dataP.length + 1}]});
        console.log(dataP);
    };

    const guardarVehicle = (data) => {
        setDataV({...dataV,results:[...dataV.results,{...data,id:dataV.length + 1}]});
        console.log(dataV);
    };

    const editarChars = (data, id) => {
        let temp = dataP;
        temp.results[id] = data;
        console.log(data);
        console.log(temp);
        setDataP(temp); 
    }

    const editarVehic = (data, id) => {
        let temp = dataV;
        temp.results[id] = data;
        setDataV(temp); 
    }


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
                <Link to="/Vehicles">All Vehicles</Link>
            </div>
            <Fragment>
            <Routes>
                <Route index path="/" element={<GetAll dataP={dataP} dataV={dataV} />} />
                <Route path="/Characters" element={<GetAllCharacters dataP={dataP} />} />
                <Route path="/Characters/:id" element={<CharacterGet type={"character"} dataP={dataP} />} />
                <Route path="/Vehicles" element={<GetAllVehicles dataV={dataV} />} />
                <Route path="/Vehicles/:id" element={<VehicleGet type={"vehicle"} dataP={dataV}/>} />
                <Route path="/AddCharacters" element={<AddCharacter set={guardarCharacter} data={dataP}/>}/>
                <Route path="/AddVehicle" element={<AddVehicle set={guardarVehicle} data={dataV}/>}/>
                <Route path="/EditVehic/:id" element={<EditVehic edit={editarVehic} data={dataV}/>}/>
                <Route path="/EditChars/:id" element={<EditChars edit={editarChars} data={dataP}/>}/>

            </Routes>
            </Fragment>
        </div>
    )
}

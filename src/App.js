
import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import axios from "axios";

// import styles
import "./App.css"

// import components
import Home from "./components/home/Home";
import Login from "./components/login/Login";

import CharactersGetAll from './components/characters/CharactersGetAll';
import CharactersGetOne from './components/characters/CharactersGetOne';
import CharactersCreate from './components/characters/CharactersCreate';
import CharactersEdit from './components/characters/CharactersEdit';

import VehiclesGetAll from './components/vehicles/VehiclesGetAll';
import VehiclesGetOne from './components/vehicles/VehiclesGetOne';
import VehiclesCreate from './components/vehicles/VehiclesCreate';
import VehiclesEdit from './components/vehicles/VehiclesEdit';

function App() {
  const [dataV, setDataV] = useState({ results: [] });
  const [dataP, setDataP] = useState({ results: [] });

  useEffect(() => {
      // const baseURL = "https://swapi-tukiti.herokuapp.com/api";
      const baseURL = "http://localhost:4000/api";

      axios.all([
          axios.get(`${baseURL}/vehicles/`),
          axios.get(`${baseURL}/characters/`)
      ])
      .then(axios.spread((vehicles, characters) => {  
          setDataV(vehicles.data);
          setDataP(characters.data);
      }))
      .catch(error => console.log(error));
  }, []);

  return (
    <Routes>
        <Route index path="/" element={<Home data={[dataV, dataP]}/>} />

        <Route index path="/login" element={<Login />} />

        <Route path="/characters" element={<CharactersGetAll data={dataP} />} />
        <Route path="/characters/:id" element={<CharactersGetOne />} />
        <Route path="/characters/create" element={<CharactersCreate />}/>
        <Route path="/characters/edit/:id" element={<CharactersEdit />}/>

        <Route path="/vehicles" element={<VehiclesGetAll data={dataV} />} />
        <Route path="/vehicles/:id" element={<VehiclesGetOne />} />
        <Route path="/vehicles/create" element={<VehiclesCreate />}/>
        <Route path="/vehicles/edit/:id" element={<VehiclesEdit />}/>
    </Routes>
  );
}

export default App;
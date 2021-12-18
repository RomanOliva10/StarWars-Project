
import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import axios from "axios";

// import styles
import "./App.css"

// import components
import Home from "./components/home/Home";

// character components
import CharactersGetAll from './components/characters/CharactersGetAll';
import CharactersGetOne from './components/characters/CharactersGetOne';
import CharactersCreate from './components/characters/CharactersCreate';
import CharactersEdit from './components/characters/CharactersEdit';

// vehicles components
import VehiclesGetAll from './components/vehicles/VehiclesGetAll';
import VehiclesGetOne from './components/vehicles/VehiclesGetOne';
import VehiclesCreate from './components/vehicles/VehiclesCreate';
import VehiclesEdit from './components/vehicles/VehiclesEdit';

// login & user components
import SignIn from './components/users/signIn/signIn';
import Register from './components/users/register/register';
import UsersGetAll from './components/users/getUsers/UsersGetAll';
import UsersGetOne from './components/users/getUsers/UsersGetOne'

let users = [
  {name: "Pablo", email: "pablo@gmail.com", pass:"123456"},
  {name: "Matias", email: "matias@hotmail.com", pass: "11111"},
  {name: "Matias", email: "matias@hotmail.com", pass: "11111"}
];
function App() {
  const [dataV, setDataV] = useState({ results: [] });
  const [dataP, setDataP] = useState({ results: [] });

  useEffect(() => {
      const baseURL = "https://swapi-tukiti.herokuapp.com/api";
      // const baseURL = "http://localhost:4000/api";

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

        <Route index path="/login" element={<SignIn/>} />
        <Route index path="/register" element={<Register/>} />

        <Route path="/characters" element={<CharactersGetAll data={dataP} />} />
        <Route path="/characters/:id" element={<CharactersGetOne />} />
        <Route path="/characters/create" element={<CharactersCreate />}/>
        <Route path="/characters/edit/:id" element={<CharactersEdit />}/>

        <Route path="/vehicles" element={<VehiclesGetAll data={dataV} />} />
        <Route path="/vehicles/:id" element={<VehiclesGetOne />} />
        <Route path="/vehicles/create" element={<VehiclesCreate />}/>
        <Route path="/vehicles/edit/:id" element={<VehiclesEdit />}/>

        <Route path="/users" element={<UsersGetAll />}/>
        <Route path="/users/:email" element={<UsersGetOne />}/>
    </Routes>
  );
}

export default App;
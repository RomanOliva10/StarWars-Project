
import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import axios from "axios";

// import styles
import "./App.css"

// import session context
import SessionProvider from './context/sessionContext';

// import components
import Home from "./components/home/home";

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
import LoggedRoute from './components/routes/LoggedRoute';

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
    <SessionProvider>
      <Routes>
        <Route index path="/" element={<Home data={[dataV, dataP]}/>} />

        <Route index path="/login" element={<SignIn/>} />
        <Route index path="/register" element={<Register/>} />

        <Route path="/characters" element={<CharactersGetAll data={dataP} />} />
        <Route path="/characters/:id" element={<CharactersGetOne />} />
        <Route path="/characters/create" element={ <LoggedRoute> <CharactersCreate /> </LoggedRoute> } />
        <Route path="/characters/edit/:id" element={ <LoggedRoute> <CharactersEdit /> </LoggedRoute> } />

        <Route path="/vehicles" element={<VehiclesGetAll data={dataV} />} />
        <Route path="/vehicles/:id" element={<VehiclesGetOne />} />
        <Route path="/vehicles/create" element={ <LoggedRoute> <VehiclesCreate /> </LoggedRoute> } />
        <Route path="/vehicles/edit/:id" element={ <LoggedRoute> <VehiclesEdit /> </LoggedRoute> } />

        <Route path="/users" element={ <LoggedRoute> <UsersGetAll /> </LoggedRoute> } />
        <Route path="/users/:email" element={ <LoggedRoute> <UsersGetOne /> </LoggedRoute> } />
      </Routes>
    </SessionProvider>
  );
}

export default App;
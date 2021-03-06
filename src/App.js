
import React, { useState, useEffect, useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import axios from "axios";

// import styles
import "./App.css"

// import session context
import { SessionContext } from './context/sessionContext';

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
import UsersGetAll from './components/users/getUsers/UsersGetAll';
import UsersGetOne from './components/users/getUsers/UsersGetOne'
import LoggedRoute from './components/routes/LoggedRoute';
import UsersEdit from './components/users/editUsers/UsersEdit';
import UserForms from './components/users/formsUsers/userForms';

function App() {


  const [dataV, setDataV] = useState({ results: [] });
  const [dataP, setDataP] = useState({ results: [] });
  const { setSession } = useContext(SessionContext);

  useEffect(() => {

    if (localStorage.getItem('token') && localStorage.getItem('user')) {
      setSession({ 
        exists: true, 
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user'))
      })
    }

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
  }, [setSession]);


  return (
    <Routes>
      <Route index path="/" element={<Home data={[dataV, dataP]}/>} />

      <Route index path="/login" element={<UserForms/>} />

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
      <Route path="/users/edit/:email" element={ <LoggedRoute> <UsersEdit /> </LoggedRoute> } />
    </Routes>
  );
}

export default App;
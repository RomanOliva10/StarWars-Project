// import logo from './logo.svg';
import "./App.css"
import { Fragment } from 'react';
import Home from './components/home/home';
import Nav from './components/nav/nav';
// import Prueba from './components/prueba/prueba';

function App() {
  return (
    <Fragment>
      <Nav/>
      <Home/>
      {/* <Prueba/> */}
    </Fragment>
  );
}

export default App;

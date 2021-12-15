import React, { Fragment } from 'react';

// import styles
import "./home.css"

// import components 
import Nav from '../layout/nav/Nav';
import NavigationFilter from '../layout/nav/NavigationFilter';
import Spinner from '../layout/spinner/Spinner';
import Card from '../layout/card/Card';

export default function Home({data}) {
    const vehicles = data[0].results;
    const characters = data[0].results;

    return (
        <Fragment>
            <Nav />
            <div className="container-home">
                <NavigationFilter />
                <h3> characters </h3>
                <div className="getAll">
                    {
                        characters.length === 0 ? 
                        <Spinner msg="loading characters" /> :
                        characters.map((element, idx) => (
                            <Card key={idx} type="characters" data={element} />
                        ))
                    }                    
                </div>
                <h3> vehicles </h3>
                <div className="getAll">
                    {
                        vehicles.length === 0 ? 
                        <Spinner msg="loading vehicles" /> :
                        vehicles.map((element, idx) => (
                            <Card key={idx} type="vehicles" data={element} />
                        ))
                    }                    
                </div>
            </div>
        </Fragment>
        
    );
}
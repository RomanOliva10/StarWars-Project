import React, { Fragment } from 'react';

// import styles
import "./home.css"

// import components 
import Nav from '../layout/nav/Nav';
import NavigationFilter from '../layout/nav/NavigationFilter';
import Spinner from '../layout/spinner/Spinner';
import Card from '../layout/card/Card';
import Footer from '../layout/footer/footer'

export default function Home({data}) {
    const vehicles = data[0].results;
    const characters = data[1].results;

    return (
        <Fragment>
            <Nav />
            <div className="wrapper"></div>
            <div className="wrapper-two"></div>
            <div className="container-all">
                <div className="container-cards">
                    <NavigationFilter />
                    <div className="getAll">
                        {
                            characters.length === 0 ? 
                            <Spinner msg="loading characters" /> :
                            characters.map((element, idx) => (
                                <Card key={idx} type="characters" data={element} />
                            ))
                        }                    
                        {
                            vehicles.length === 0 ? 
                            <Spinner msg="loading vehicles" /> :
                            vehicles.map((element, idx) => (
                                <Card key={idx} type="vehicles" data={element} />
                            ))
                        }                    
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
        
    );
}
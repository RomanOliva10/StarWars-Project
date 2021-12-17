import React, { Fragment, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

// import components
import Error from '../layout/error/Error';
import Spinner from '../layout/spinner/Spinner';
import Nav from '../layout/nav/Nav';
import Footer from '../layout/footer/footer';
import CardGet from '../layout/cardGet/cardGet';

export default function CharactersGetOne() {
    // character state
    let [character, setCharacter] = useState({});

    // error not found state
    let [error404, setError404] = useState(false);

    // get ID from URL
    const location = useLocation();
    let id = location.pathname.split('/')[2];

    useEffect(() => {
        // const URL = `http://localhost:4000/api/characters/${id}`;
        const URL = `https://swapi-tukiti.herokuapp.com/api/characters/${id}`;

        axios.get(URL)
        .then(res => {  
            if (res.status === 200 && res.data.data !== false) {
                setCharacter(res.data);
                setError404(false);
            } else {
                setError404(true);
            }
        })
        .catch(error => {
            setError404(true);
            console.log(error);
        });      
    }, [id]);
    
    return(
        <Fragment>
            <Nav />
            <div className="container-all">
                {
                    error404 ?
                    <Error msg="not found" code="404" /> :
                    character.length === 0 ?
                    <Spinner msg="loading" /> :
                    <CardGet data={character} type={"character"}/>
                }            
            </div>
            <Footer/>
        </Fragment>
    );
}

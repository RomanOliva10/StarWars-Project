import React, { Fragment, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

// import styles
import '../layout/styles/getOne.css';

// import components
import Error from '../layout/error/Error';
import Spinner from '../layout/spinner/Spinner';
import DescriptionColumn from '../layout/description/descriptionColumn/DescriptionColumn';
import FilmsCarousel from '../layout/filmCardCarousel/filmCarousel';
import Nav from '../layout/nav/Nav';
import NavigationFilter from '../layout/nav/NavigationFilter';

export default function CharactersGetOne() {
    // character state
    let [character, setCharacter] = useState({});

    // error not found state
    let [error404, setError404] = useState(false);

    // get ID from URL
    const location = useLocation();
    let id = location.pathname.split('/')[2];

    useEffect(() => {
        const URL = `http://localhost:4000/api/characters/${id}`;
        // const URL = `https://swapi-tukiti.herokuapp.com/api/characters/${id}`;

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
            <div className="container-home">
                <NavigationFilter />
                {
                    error404 ?
                    <Error msg="not found" code="404" /> :
                    character.length === 0 ?
                    <Spinner msg="loading" /> :
                    
                    <div className="main-get">
                        <div className="line-card">
                            <div className="container-card-get" >
                                <div className="container-img-description">
                                    <img className="img-main-description" src="" alt="" /> 
                                </div>
                                <DescriptionColumn character={character} type="character" />
                        </div>
                            <Link to={`/characters/edit/${id}`}>Editar</Link>
                        </div>
                        <FilmsCarousel data={[]} />
                    </div>
                    }            
            </div>
        </Fragment>
    );
}

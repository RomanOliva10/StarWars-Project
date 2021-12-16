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

export default function VehiclesGetOne() {
    // vehicle state
    let [vehicle, setVehicle] = useState({});

    // error not found state
    let [error404, setError404] = useState(false);

    // get ID from URL
    const location = useLocation();
    let id = location.pathname.split('/')[2];

    useEffect(() => {
        // const URL = `http://localhost:4000/api/vehicles/${id}`;
        const URL = `https://swapi-tukiti.herokuapp.com/api/vehicles/${id}`;

        axios.get(URL)
        .then(res => {  
            if (res.status === 200 && res.data.data !== false) {
                setVehicle(res.data);
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
            <div className="wrapper"></div>
            <div className="wrapper-two"></div>
            <div className="container-all">
                {
                    error404 ?
                    <Error msg="not found" code="404" /> :
                    vehicle.length === 0 ?
                    <Spinner msg="loading" /> :
                    <div className="main-get">
                        <div className="line-card">
                            <div className="container-card-get" >
                                <div className="container-img-description">
                                    <img className="img-main-description" src={`https://swapi-tukiti.herokuapp.com/imgs/vehicles/${vehicle.image}`} alt={vehicle.name} /> 
                                </div>
                                <DescriptionColumn character={vehicle} type="vehicle" />
                            <Link to={`/vehicles/edit/${id}`}>Editar</Link>
                            </div>
                        </div>
                        <FilmsCarousel data={[]} />
                    </div>
                }            
            </div>
        </Fragment>
    );
}

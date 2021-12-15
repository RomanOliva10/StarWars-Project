import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// import styles
import '../layout/styles/getAll.css';

// import components
import Nav from '../layout/nav/Nav';
import NavigationFilter from '../layout/nav/NavigationFilter';
import Spinner from '../layout/spinner/Spinner';
import Card from '../layout/card/Card';


export default function VehiclesGetAll({ data }) {

    let [page, setPage] = useState(1);
    let [button, setButton] = useState(true);
    let [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        // const URL = `https://swapi-tukiti.herokuapp.com/api/vehicles/?page=${page}`;
        const URL = `http://localhost:4000/api/vehicles/?page=${page}`;

        if (page === 1) {  
            setCurrentData(data.results);
            
            if (page*10 < data.count) {
                setButton(true);
            } else {
                setButton(false);
            }
        } else {
            axios.get(URL)
            .then(res => {  
                setCurrentData([...currentData, ...res.data.results]);

                if (page*10 < data.count) {
                    setButton(true);
                } else {
                    setButton(false);
                }
            })
            .catch(error => console.log(error));
        }
    }, [page, data]);

    return (
        <Fragment>
            <Nav />
            <div className="container-home">
                <NavigationFilter />
                <div className="getAll">
                    {
                        currentData.length === 0 ? 
                        <Spinner msg="loading vehicles" /> :
                        currentData.map((element, idx) => (
                            <Card key={idx} type="vehicles" data={element} />
                        ))
                    }
                    <Link className="add-card" to='/vehicles/create'>
                        <div className="add-container-img">
                            <div className='add'>
                                <i className="fas fa-plus"></i>
                                <span> create </span>
                            </div>
                            <p> vehicle </p>
                        </div>
                    </Link>
                    
                </div>
                {button ? <button type="button" onClick={() => setPage(page + 1)}> load more </button> : null}
            </div>
        </Fragment>
    );
}

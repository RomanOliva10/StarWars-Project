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
import Search from '../layout/search/Search';
import Footer from '../layout/footer/footer'

export default function VehiclesGetAll({ data }) {

    let [page, setPage] = useState(1);
    let [button, setButton] = useState(true);
    let [currentData, setCurrentData] = useState([]);
    let [search, setSearch] = useState("");
    let [searchError, setSearchError] = useState(false) 

    useEffect(() => {
        const URL = `https://swapi-tukiti.herokuapp.com/api/vehicles/?page=${page}`;
        // const URL = `http://localhost:4000/api/vehicles/?page=${page}`;

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
                setCurrentData(prevData => {
                    return [...prevData, ...res.data.results]
                });

                if (page*10 < data.count) {
                    setButton(true);
                } else {
                    setButton(false);
                }
            })
            .catch(error => console.log(error));
        }
    }, [page, data]);

    useEffect(() => {
        if (search !== "") {
            const URL = `https://swapi-tukiti.herokuapp.com/api/vehicles/?name=${search}`;
            // const URL = `http://localhost:4000/api/vehicles/?name=${page}`;
            console.log(URL);
            axios.get(URL)
            .then(res => {  
                let response = res.data.results;
                if (response.length === 0) {
                    setCurrentData(data.results);
                    setSearchError(true);
                } else {
                    setCurrentData(response);
                    setButton(false);
                    setSearchError(false);
                }              
            })
            .catch(error => console.log(error));
        } else {
            setCurrentData(data.results);
        }
    }, [search, data]);

    const searchData = data => {
        setSearch(data);
    }

    return (
        <Fragment>
            <Nav />
            <div className="container-all">
                <div className="buttons">
                    <Search searchData={searchData} searchError={searchError} />
                    <Link className="add-card" to='/vehicles/create'>Add Vehicle</Link>
                </div>
                <div className="container-cards">
                    <NavigationFilter />
                    <div className="getAll">
                        {
                            currentData.length === 0 ? 
                            <Spinner msg="loading vehicles" /> :
                            currentData.map((element, idx) => (
                                <Card key={idx} type="vehicles" data={element} />
                            ))
                        }
                        {button ? <button type="button" onClick={() => setPage(page + 1)}> load more </button> : null}
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    );
}
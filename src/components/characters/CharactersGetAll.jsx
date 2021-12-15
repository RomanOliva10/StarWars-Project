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


export default function CharactersGetAll({ data }) {

    let [page, setPage] = useState(1);
    let [button, setButton] = useState(true);
    let [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        const URL = `https://swapi-tukiti.herokuapp.com/api/characters/?page=${page}`;
        // const URL = `http://localhost:4000/api/characters/?page=${page}`;

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
            <div className="wrapper"></div>
            <div className="wrapper-two"></div>
            <div className="container-all">
                <div className="buttons">
                    <Link className="" to='/characters/create'>Create Character</Link>
                </div>
                <div className="container-cards">
                    <NavigationFilter />
                    <div className="getAll">
                        {
                            currentData.length === 0 ? 
                            <Spinner msg="loading characters" /> :
                            currentData.map((element, idx) => (
                                <Card key={idx} type="characters" data={element} />
                            ))
                        }
                        {button ? <button type="button" onClick={() => setPage(page + 1)}>Load More</button> : null}  
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

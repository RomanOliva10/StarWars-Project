import React, { Fragment, useContext, useEffect, useState } from 'react';
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
import Header from '../layout/header/header';


// import context
import { SessionContext } from '../../context/sessionContext';

export default function CharactersGetAll({ data }) {
    const { session } = useContext(SessionContext);

    let [page, setPage] = useState(1);
    let [button, setButton] = useState(true);
    let [currentData, setCurrentData] = useState([]);
    let [search, setSearch] = useState("");
    let [searchError, setSearchError] = useState(false)

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
            const URL = `https://swapi-tukiti.herokuapp.com/api/characters/?name=${search}`;
            // const URL = `http://localhost:4000/api/characters/?name=${page}`;
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
            <Header/>
            <div className="container-all">
                <div className="buttons">
                    <Search searchData={searchData} searchError={searchError} />
                    { session.exists && <Link className="" to='/characters/create'>Create Character</Link> }
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
            <Footer/>
        </Fragment>
    );
}
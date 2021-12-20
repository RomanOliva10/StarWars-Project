import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

// import styles
import './getUsers.css';

// import components
import Nav from "../../layout/nav/Nav"
import User from "../../users/getUsers/User"
import Spinner from '../../layout/spinner/Spinner';
import Search from '../../layout/search/Search';


export default function GetAllUsers({ data }) {
    let [userData, setUserData] = useState([]);
    let [search, setSearch] = useState("");
    let [searchError, setSearchError] = useState(false) 


    // load users data
    useEffect(() => {
        axios.get("https://swapi-tukiti.herokuapp.com/api/users")
        .then(res => {
            setUserData(res.data.results);
        })
        .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        if (search !== "") {
            const URL = `https://swapi-tukiti.herokuapp.com/api/users/?name=${search}`;
            // const URL = `http://localhost:4000/api/users/?name=${page}`;
            console.log(URL);
            axios.get(URL)
            .then(res => {  
                let response = res.data.results;
                if (response.length === 0) {
                    setUserData(prevData => prevData);
                    setSearchError(true);
                } else {
                    setUserData(response);
                    setSearchError(false);
                } 
            })
            .catch(error => console.log(error));
        } else {
            setUserData(prevData => prevData);
        }
    }, [search, data]);

    const searchData = data => {
        setSearch(data);
    }


    return(
        userData.length === 0 ? 
        <Spinner msg="loading users" /> :
        <Fragment>
            <Nav/>
            <div className="container-all-users">
                <Search searchData={searchData} searchError={searchError}/>
                <div className='table-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th colSpan="3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((ele,idx)=> <User key={idx} data={ele}/>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

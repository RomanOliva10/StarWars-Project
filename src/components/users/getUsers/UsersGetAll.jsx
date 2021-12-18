import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

// import styles
import './getUsers.css';

// import components
import Nav from "../../../../../components/layout/nav/Nav"
import User from "../../../../../components/users/getUsers/User"
import Spinner from '../../../../../components/layout/spinner/Spinner';


export default function GetAllUsers() {
    let [userData, setUserData] = useState([]);

    // load users data
    useEffect(() => {
        axios.get("https://swapi-tukiti.herokuapp.com/api/users")
        .then(res => {
            setUserData(res.data.results);
        })
        .catch(error => console.log(error));
    }, []);

    return(
        userData.length === 0 ? 
        <Spinner msg="loading users" /> :
        <Fragment>
            <Nav/>
        <div className="container-all-users">
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th colspan="3">Actions</th>
                        </tr>
                    </thead>
                        {userData.map((ele,idx)=> <User key={idx} data={ele}/>)}
                </table>
            </div>
        </div>
        </Fragment>
    )
}

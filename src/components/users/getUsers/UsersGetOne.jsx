import React, { Fragment, useState } from "react";
import { useLocation } from "react-router";
import profileImg from "./img/STSF.png";

//Style
import './getUsers.css';
import Nav from "../../../../../components/layout/nav/Nav"
import { useEffect } from "react/cjs/react.development";
import axios from "axios";


export default function UsersGetOne(){
    
    let [user, setUser] = useState({
        id: null,
        name: null,
        email: null
    });
    
    useEffect(() => {
        const location = useLocation();
        let email = location.pathname.split('/')[2];
        
        axios.get(`https://swapi-tukiti.herokuapp.com/api/users/${email}`)
        .then(res => {
            let resUser = res.data;
            resUser.password = "********";
            setUser(resUser);
        })
        .catch(error => console.log(error));
    }, []);

    return(
        <Fragment>
            <Nav/>
            <div className="user-container-all">
                <div className="user-container">
                    <div className="red-card"><p>star wars</p></div>

                    <div className="black-card">
                        <div className="profile-img"><img src={profileImg} alt={user.name} /></div>
                        <div className="profile-data">
                            <h2>name : {user.name}</h2>
                            <h2>email : {user.email}</h2>
                            <h2>password : {user.password}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

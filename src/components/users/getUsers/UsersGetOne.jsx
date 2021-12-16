import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router";
import profileImg from "./img/STSF.png";

//Style
import './getUsers.css';

import { Link } from "react-router-dom";

export default function UsersGetOne(prop){

    const location = useLocation();
    let email = location.pathname.split('/')[2];

    const user = prop.dataU.filter(e => e.email == email)[0];

    return(
        
        <div className="user-container-all">
            <div className="user-container">
                <div className="red-card"><p>star wars</p></div>

                <div className="black-card">
                    <div className="profile-img"><img src={profileImg} /></div>
                    <div className="profile-data">
                        <h2>name : {user.name}</h2>
                        <h2>email : {user.email}</h2>
                        <h2>password : {user.pass}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

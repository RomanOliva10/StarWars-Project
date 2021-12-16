import React from 'react';
import { Link } from "react-router-dom";

//Style
import './getUsers.css';

import User from "./User"
import Spinner from "../../layout/spinner/Spinner";

export default function GetAllUsers({dataU}){
    return(
        // dataU.results.length === 0 ? 
        // <Spinner msg="loading users" />:
        <div className="container-all-users">
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th><th>Email</th><th>Contraseña</th>
                        </tr>
                    </thead>

                        {dataU.map((ele,idx)=> <User key={idx} datos={ele}/>)}

                </table>
            </div>
        </div>
    )
}

import React, { Fragment } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import "../getAll.css";

export default function User({datos}){

    const navegate = useNavigate();

    const handleClick = () => {
        navegate(`/Users/${datos.email}`);
    }

    return(


            <tr onClick={handleClick}>
                <td>{datos.name}</td><td>{datos.email}</td><td>{datos.pass}</td>
            </tr>


    )
}

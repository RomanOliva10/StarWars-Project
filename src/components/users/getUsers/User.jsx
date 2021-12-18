import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

export default function User({data}){

    const handleClick = e => {
        e.preventDefault();
        
        axios
        .delete(`https://swapi-tukiti.herokuapp.com/api/users/delete/${data.email}`)
        .then(res => {
            alert("User deleted!");
            window.location.reload(false);
        })
        .catch(error => console.log(error));
    }

    return(
        <tr>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>
                <Link to={`${data.email}`}>
                    <i className="fas fa-user"></i>
                </Link>
            </td>
            <td>
                <Link to={`edit/${data.email}`}>
                    <i className="fas fa-edit"></i>
                </Link>
            </td>
            <td>
                <a href="!#" onClick={handleClick}>
                    <i className="fas fa-trash"></i>
                </a>                
            </td>
        </tr>
    );
}
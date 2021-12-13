import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./getAll.css";


function Card({pos, datos, img, type}) {

    // Obtener el ID para el ruteo
    let id = datos.url.split('/');
    id = id[id.length-2];
    
    // Obtener la ubicacion actual
    let location = useLocation();

    return (
        <div className="card">
            <Link to={`/${type}/${pos}`}>
                <div className="container-img"><img src={img} alt="" /></div>
                <div className="container-text">
                    <h3>{datos.name}</h3>
                </div>
            </Link>
        </div>
    )
}

export default Card;
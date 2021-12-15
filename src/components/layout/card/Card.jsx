import React from 'react';
import { Link } from 'react-router-dom';

// import styles
import "./card.css";

export default function Card({type, data}) {
    return (
        <div className="card">
            <Link to={`/${type}/${data.id}`}>
                <div className="container-img"><img src={data.img} alt={data.name} /></div>
                <div className="container-text">
                    <h3>{data.name}</h3>
                </div>
            </Link>
        </div>
    );
}
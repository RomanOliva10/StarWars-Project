import React from 'react';
import "./styles.css";


function Card({datos,img}) {
    
    return (
        <div className="card">
            <div className="container-img"><img src={img} alt="" /></div>
            <div className="container-text">
                <h3>{datos.name}</h3>
            </div>
        </div>
    )
}

export default Card;
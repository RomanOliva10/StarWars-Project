import React from "react";
import './rowDescription.css'

export default function RowDescription(prop){

    let {category, info} = prop.data;

    return(
        <div className="row-description-card">

            <span className="category-card"> {category}:</span>
            <span className="info-card">{info}</span>

        </div>
    );
}
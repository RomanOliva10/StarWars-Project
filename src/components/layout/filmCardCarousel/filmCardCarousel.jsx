import React from "react";
import './filmCardCarousel.css'

export default function FilmCardCarousel(prop){

    let {title, img} = prop.data;

    return(
            <div className={`film`}>
                <img src={img} alt="" />
                <h4>{title}</h4>
            </div>
    );
}
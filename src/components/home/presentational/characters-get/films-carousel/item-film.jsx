import React from "react";

export default function ItemFilm(prop){

    let {title, img} = prop.data;

    return(
            <div className={`item-film ${prop.classe}`}>
                <img src={img} alt="" />
                <h4>{title}</h4>
            </div>
    );
}
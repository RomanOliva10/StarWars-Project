import React from "react";
import ItemFilm from "./item-film";
import './film-carousel.css';

export default function FilmsCarousel(prop){

    let dataFilm = prop.data;

    return(
        <section className="films-appearances-card">
        <hr/>
        <h3>Films Appearances</h3>
        <hr/>

        <div className="films-container">
            
            <div className="carousel">
                {dataFilm.map((film, indx) => (<ItemFilm key={indx} data={film} classe={(indx > 2)?"disabled":""}/>))}
            </div>
            
            <button className="button-next"><i class="fas fa-chevron-circle-right"></i></button>
       
        </div>
    </section>
    
    );
}
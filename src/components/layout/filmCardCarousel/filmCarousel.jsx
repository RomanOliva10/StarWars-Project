import React, {useRef} from "react";

//DataMock

//Styles
import './filmCarousel.css';
//Components
import FilmCardCarousel from "./filmCardCarousel";


export default function FilmsCarousel(prop){

    let dataFilm = prop.data;

    let refContainerCarousel = useRef(); 
    let refIzq = useRef();
    let refDer = useRef();

    const buttonRight = () => {
        refContainerCarousel.current.scrollLeft += refContainerCarousel.current.offsetWidth;
    }
    
    const buttonLeft = () => {  
        refContainerCarousel.current.scrollLeft -= refContainerCarousel.current.offsetWidth;
    }

    return(

        <section className="films-appearances-card">

            <hr/>
            <h3>Films Appearances</h3>
            <hr/>

            <div className="container-films-carousel">
            
				<button  id="button-left" className="button-left" onClick={buttonLeft} ref={refIzq}><i className="fas fa-angle-left"></i></button>

				<div ref={refContainerCarousel} className="container-carousel">
					<div className="carousel">
						
                        {dataFilm.map((film, indx) => (<FilmCardCarousel key={indx} data={film}/>))}

					</div>
				</div>

				<button  id="button-right" className="button-right"  onClick={buttonRight} ref={refDer}><i className="fas fa-angle-right"></i></button>
		</div>

        </section>
    
    );
}
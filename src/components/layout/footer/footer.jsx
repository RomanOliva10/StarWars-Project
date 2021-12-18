import React from "react";

//Styles
import './footer.css'

import logo from "./img/darthvader_96014.svg";

export default function Footer(){

    return(
        <footer>

            <img className={"icon-vader"} src={logo} alt="" />
            
            <div className="container-main-footer">
                
                

                <div className="col-footer-logo">
                    <h4 className="title-footer">Star Wars &#174;</h4>
                    <p className="description-footer">Proyecto final del BootCamp 2021 Dev Place. La aplicacion se basa en la tematica de Star Wars. Los integrantes son Pablo Nader, Pablo Rizzo, Roman Oliva y Matias Hidalgo.</p>
                </div>
                
                <hr className="vertical-footer"/>

                <div className="col-footer">
                    <h4 className="title-col-footer">Contact</h4>
                    <div className="contacts-footer">

                        <div className="item-contact">
                            <h5>Roman Oliva</h5>
                            <ul className="redes-footer">
                                <li><a href="!#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                                <li><a href="mailto:romanoliva7@gmail.com"><i className="fas fa-envelope"></i></a></li>
                            </ul>
                        </div>

                        <div className="item-contact">
                            <h5>Pablo Nader</h5>
                            <ul className="redes-footer">
                                <li><a href="!#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                                <li><a href="mailto:hm.pablito@gmail.com"><i className="fas fa-envelope"></i></a></li>
                            </ul>
                        </div>

                        <div className="item-contact">
                            <h5>Pablo Rizzo</h5>
                            <ul className="redes-footer">
                                <li><a href="!#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                                <li><a href="mailto:pablog.rizzo@gmail.com"><i className="fas fa-envelope"></i></a></li>
                            </ul>
                        </div>

                        <div className="item-contact">
                            <h5>Matias Hidalgo</h5>
                            <ul className="redes-footer">
                                <li><a href="https://www.linkedin.com/in/matias-hidalgo/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                                <li><a href="https://github.com/matiashidalgo11" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                                <li><a href="mailto:matiashidalgo18@gmail.com"><i className="fas fa-envelope"></i></a></li>
                            </ul>
                        </div>

                        
                    </div>

                    
                </div>
                
            </div>

            <hr className="horizontal-footer"/>

            <span className="derechos-footer">©2021 StarWars Bootcamp. Derechos reservados.</span>
            
        </footer>
    )
}
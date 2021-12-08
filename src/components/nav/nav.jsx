import React from 'react'
import "./nav.css"

export default function Nav(){
    return(
        <nav>
        <div className="container">
            <ul className="nav hidden">
                <li><a href=""><i className="fab fa-facebook"></i></a></li>
                <li><a href=""><i className="fab fa-twitter-square"></i></a></li>
                <li><a href=""><i className="fab fa-github"></i></a></li>
                <li><a href=""><i className="fab fa-instagram"></i></a></li>
            </ul>
            <ul className="nav">
                <li><a href="">Star Wars<br/>Databank</a></li>
            </ul>
            <ul className="nav">
                <li><a className="btn" href="">Sign in</a></li>
            </ul>
        </div>
    </nav>
    )
}
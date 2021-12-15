import React from 'react';
import { Link } from 'react-router-dom';

// import styles
import "./nav.css";

export default function Nav() {
    return(
        <nav>
        <div className="container">
            <ul className="nav hidden">
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
            </ul>
            <ul className="nav">
                <li><Link to="/" className="title">Star Wars<br/>Databank</Link></li>
            </ul>
            <ul className="nav">
                <li><Link to="/login">Sign in</Link></li>
            </ul>
        </div>
    </nav>
    );
}
import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { SessionContext } from '../../../context/sessionContext';
import UserMenu from '../../users/menu/UserMenu';

// import styles
import "./nav.css";

export default function Nav() {
    const { session } = useContext(SessionContext);

    return(
        <Fragment>
            <nav>
                <div className="container">
                    <ul className="nav hidden">
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a></li>
                        <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                    <ul className="nav title">
                        <li><Link to="/">Star Wars<br/>Databank</Link></li>
                    </ul>
                    <ul className="nav">
                        { 
                            session.exists
                            ? <UserMenu />
                            :<li><Link to="/login">Sign in</Link></li>
                        }
                    </ul>
                </div>
            </nav>
            <div className='relleno'></div>
        </Fragment>
    );
}
import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { SessionContext } from '../../../context/sessionContext';

export default function UserMenu() {
    const { session, setSession } = useContext(SessionContext);

    const handleClick = e => {
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setSession({ exists: false, token: null, user: { id: null, user: null, email: null } })
    }

    return (
        // Hay que estilar esto
        <Fragment>
            <li><a href="!#">{session.user.name}    <i className="fas fa-chevron-down"></i></a>
                <ul>
                    <li><Link to="/users">View All Users</Link></li>
                    <li><Link to={`/users/${session.user.email}`}>My Profile</Link></li>
                    <li><a href="!#" onClick={handleClick}>Logout</a></li>
                </ul>
            </li>
        </Fragment>
    )
}

import React, { useContext } from 'react';
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
        <div>
            <a href="!#">Welcome {session.user.name}</a>
            <Link to="/users">View All Users</Link>
            <Link to={`/users/${session.email}`}>My Profile</Link>
            <a href="!#" onClick={handleClick}>Logout</a>
        </div>
    )
}

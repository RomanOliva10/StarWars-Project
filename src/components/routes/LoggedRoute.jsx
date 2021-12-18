import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

// import context
import { SessionContext } from '../../context/sessionContext';

export default function LoggedRoute({ children }) {
    const { session } = useContext(SessionContext);    

    return session.exists ? children : <Navigate to="/login" />;
}
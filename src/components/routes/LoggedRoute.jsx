import React, { useContext } from 'react';

// import context
import { SessionContext } from '../../context/sessionContext';
import SignIn from '../users/signIn/signIn';

export default function LoggedRoute({ children }) {
    const { session } = useContext(SessionContext); 
    
    return (session.exists ? children : <SignIn />); 
}
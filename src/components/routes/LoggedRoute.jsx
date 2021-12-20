import React, { useContext } from 'react';

// import context
import { SessionContext } from '../../context/sessionContext';
import SignIn from '../users/signIn/signIn';
import UsersForms from '../users/formsUsers/userForms'

export default function LoggedRoute({ children }) {
    const { session } = useContext(SessionContext); 
    
    return (session.exists ? children : <UsersForms/>); 
}
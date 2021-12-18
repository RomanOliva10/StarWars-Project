import React, { createContext, useState } from 'react';

export const SessionContext = createContext();

const SessionProvider = props => {
    // session state
    const [session, setSession] = useState({ 
        exists: false, 
        token: null, 
        user: {
        id: null,
        name: null,
        email: null
        } 
    });

    return (
        <SessionContext.Provider
            value={
                {session, setSession}
            }
        >
            { props.children }
        </SessionContext.Provider>
    )
}

export default SessionProvider;
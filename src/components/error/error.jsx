import React from 'react';
import './error.css';

const Error = ({msg, code}) => {
    return (
        <div className="error-container">
            <div className="error-code">{code}</div>
            <div className="error-text">{msg}</div>
        </div>
    );
}
 
export default Error;
import React from 'react';

// import styles
import './error.css';

export default function Error({msg, code}) {
    return (
        <div className="error-container">
            <div className="error-code">{code}</div>
            <div className="error-text">{msg}</div>
        </div>
    );
}
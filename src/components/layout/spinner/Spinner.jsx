import React from 'react';

// import styles
import './spinner.css';

export default function Spinner({msg}) {
    return (
        <div className="spinner-container">
            <div className="spinner-text">{msg}</div>
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
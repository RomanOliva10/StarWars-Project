import React from 'react';
import './spinner.css';

const Spinner = ({msg}) => {
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
 
export default Spinner;
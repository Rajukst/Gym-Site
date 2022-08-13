import React from 'react';
import "./CustomSpinner.css"
const CustomSpinner = () => {
    return (
        <div className="center">
            <div className="ring"></div>
            <p className="LoadingSpin">loading...</p>
        </div>
    );
};

export default CustomSpinner;
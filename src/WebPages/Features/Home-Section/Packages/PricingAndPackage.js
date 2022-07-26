import React, { useEffect, useState } from 'react';
import "./PriceAndPackage.css"
import { Row } from 'react-bootstrap';
import DynamicPackage from './DynamicPackage';
const PricingAndPackage = () => {

    return (
        <div>
            <p className="mt-4">OUR PRICING</p>
            <h1 className="pricePackage">PRICING & <span className="package-span">PACKAGES</span></h1>
           
        </div>
    );
};

export default PricingAndPackage;
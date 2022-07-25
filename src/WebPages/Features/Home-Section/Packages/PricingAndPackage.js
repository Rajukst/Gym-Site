import React, { useEffect, useState } from 'react';
import "./PriceAndPackage.css"
import { Row } from 'react-bootstrap';
import DynamicPackage from './DynamicPackage';
const PricingAndPackage = () => {
const [classes, setClasses]= useState([]);
useEffect(()=>{
    const url= 'http://localhost:5000/classes';
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data))
},[])
    return (
        <div>
            <p className="mt-4">OUR PRICING</p>
            <h1 className="pricePackage">PRICING & <span className="package-span">PACKAGES</span></h1>
            <Row xs={12} md={2} lg={4} className="g-4 m-1">
            {
                classes.slice(0, 3).map(singleClass=> <DynamicPackage
                key={singleClass._id}
                getClass={singleClass}
                ></DynamicPackage>)
            }
    </Row>
        </div>
    );
};

export default PricingAndPackage;
import React from 'react';
import MyCarosul from '../Carosul/MyCarosul';
import Classes from '../Classes/Classes';
import ClientChart from '../Client-Chart/ClientChart';
import JoinUs from '../Join/JoinUs';
import PricingAndPackage from '../Packages/PricingAndPackage';
import Intro from '../Small-Intro/Intro';

const Home = () => {
    return (
        <div>
         <MyCarosul></MyCarosul>
         <Intro></Intro>
         <ClientChart></ClientChart>
         <JoinUs></JoinUs>
         <Classes></Classes>
         <PricingAndPackage></PricingAndPackage>
        </div>
    );
};

export default Home;
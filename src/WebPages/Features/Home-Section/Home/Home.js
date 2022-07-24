import React from 'react';
import MyCarosul from '../Carosul/MyCarosul';
import ClientChart from '../Client-Chart/ClientChart';
import Intro from '../Small-Intro/Intro';

const Home = () => {
    return (
        <div>
         <MyCarosul></MyCarosul>
         <Intro></Intro>
         <ClientChart></ClientChart>
        </div>
    );
};

export default Home;
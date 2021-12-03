import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Headers/Header';
import Products from '../Products/Products';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Service></Service>
            <Products></Products>
        </div>
    );
};

export default Home;
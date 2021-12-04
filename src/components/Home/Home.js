import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Header from '../Headers/Header';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Service></Service>
            <Products></Products>
            <Gallery></Gallery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;
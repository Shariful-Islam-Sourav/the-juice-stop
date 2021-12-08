import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Products></Products> 
            <Reviews></Reviews>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;
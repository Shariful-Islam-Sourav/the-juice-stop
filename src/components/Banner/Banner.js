import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://opencart.mahardhi.com/MT05/fruitify/image/cache/catalog/banners/mainbanner1-1920x800.jpg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://opencart.mahardhi.com/MT05/fruitify/image/cache/catalog/banners/mainbanner2-1920x800.jpg"
        alt="Second slide"
      />
    </Carousel.Item>
  </Carousel>
  );
};

export default Banner;

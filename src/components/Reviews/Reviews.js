import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Review.css";

const Reviews = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="bg-review p-5">
      <Container className="text-center my-5">
        <h2>Reviews</h2>
        <Carousel responsive={responsive}>
          <div className="my-5">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              at quis repellendus repudiandae necessitatibus. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit Lorem ipsum dolor sit amet
              consectetur adipisicing elit"
            </p>
            <p className="text-warning">
              <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
              <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
              <i className="far fa-star"></i>
            </p>
            <img
              className="rounded-circle"
              src="https://opencart.mahardhi.com/MT05/fruitify/image/cache/catalog/testimonial/1-146x146.jpg"
              alt="user"
            />{" "}
            <br />
            <small>Customer</small>
          </div>
          <div className="mt-5">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              at quis repellendus repudiandae necessitatibus. consectetur
              adipisicing elit. Lorem ipsum dolor sit amet consectetur
              adipisicing elit Lorem ipsum dolor sit amet consectetur
              adipisicing elit"
            </p>
            <p className="text-warning">
              <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
              <i className="fas fa-star"></i> <i className="fas fa-star-half"></i>{" "}
              <i className="far fa-star"></i>
            </p>
            <img
              className="rounded-circle"
              src="https://opencart.mahardhi.com/MT05/fruitify/image/cache/catalog/testimonial/2-146x146.jpg"
              alt="user"
            />{" "}
            <br />
            <small>Customer</small>
          </div>
          <div className="mt-5">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              at quis repellendus repudiandae necessitatibus. consectetur
              adipisicing elit. Lorem ipsum dolor sit amet consectetur
              adipisicing elit Lorem ipsum dolor sit amet consectetur
              adipisicing elit"
            </p>
            <p className="text-warning">
              <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
              <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
              <i className="fas fa-star-half"></i>
            </p>
            <img
              className="rounded-circle"
              src="https://opencart.mahardhi.com/MT05/fruitify/image/cache/catalog/testimonial/3-146x146.jpg"
              alt="user"
            />{" "}
            <br />
            <small>Customer</small>
          </div>
        </Carousel>
      </Container>
    </div>
  );
};

export default Reviews;

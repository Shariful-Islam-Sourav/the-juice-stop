import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Service = () => {
  return (
    <Container className="my-5">
      <Row xs={1} md={2} lg={3} className="shadow rounded-3 py-4 px-3">
        <Col className="text-center border border-start-0 border-top-0 border-bottom-0">
          <h5>Free Shipping</h5>
          <i className="fas fa-truck text-warning"></i>
          <p className="fw-lighter">On order over 100$</p>
        </Col>
        <Col className="text-center border border-start-0 border-top-0 border-bottom-0">
          <h5>Cash on Delivery</h5>
          <i className="fas fa-wallet text-warning"></i>
          <p className="fw-lighter">All over the country</p>
        </Col>
        <Col className="text-center">
          <h5>Suprise Gifts</h5>
          <i className="fas fa-gift text-warning"></i>
          <p className="fw-lighter">On every order</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Service;

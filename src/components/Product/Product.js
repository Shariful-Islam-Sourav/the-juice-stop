import React from "react";
import { Col } from "react-bootstrap";
import './Product.css'

const Product = ({ products }) => {
  const { strDrink, strDrinkThumb, strCategory } = products;
  return (
    <Col>
    <div className="card-group">
  <div className="card border-0 shadow juice-card">
    <img src={strDrinkThumb} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{strDrink}</h5>
      <p>{strCategory}</p>
    </div>
  </div>
  </div>
    </Col>
  );
};

export default Product;

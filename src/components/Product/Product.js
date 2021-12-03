import React from "react";
import { Card, Col, Button } from "react-bootstrap";

const Product = ({ products }) => {
  const { strDrink, strDrinkThumb, strInstructions, strCategory } = products;
  console.log(products);
  return (
    <Col>
    <div class="card-group">
  <div class="card">
    <img src={strDrinkThumb} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{strDrink}</h5>
      <h6>{strCategory}</h6>
      <p class="card-text">{strInstructions}</p>
    </div>
  </div>
  </div>
    </Col>
  );
};

export default Product;

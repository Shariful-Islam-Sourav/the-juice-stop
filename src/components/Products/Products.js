import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => setProducts(data.drinks));
  }, []);
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((product) => (
          <Product products={product} key={product.idDrink}></Product>
        ))}
      </Row>
    </Container>
  );
};

export default Products;

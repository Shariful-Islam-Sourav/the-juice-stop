import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m")
      .then((res) => res.json())
      .then((data) => setProducts(data.drinks));
  }, []);
  const slicedProducts = products.slice(0,6);
  return (
    <Container className="my-5 text-center">
      <h2 className="mb-4">Drinks</h2>
      <Row xs={1} md={2} lg={3} className="g-4 text-start">
        { slicedProducts.map((product) => (
          <Product products={product} key={product.idDrink}></Product>
        ))}
      </Row>
      <Button variant="outline-warning mt-4">Explore More <i className="fas fa-search"></i></Button>
    </Container>
  );
};

export default Products;

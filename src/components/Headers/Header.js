import React from "react";
import {
  Navbar,
  Button,
  Container,
  Nav,
  Form,
} from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img
              src="https://i.ibb.co/2y5GKMj/logo.png"
              alt="logo"
              width="200"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Shop</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
            </Nav>
            <Form className="d-flex align-items-center">
              <h6 class="me-2">Signed as</h6>
              <Button variant="outline-success">Logout</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

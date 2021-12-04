import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Gallery.css'

const Gallery = () => {
    return (
        <Container className="text-center my-5">
            <h2>Gallery Post</h2>
            <Row  xs={1} md={2} lg={3} className="g-3">
            <Col><img className="img-fluid" src="https://opencart.mahardhi.com/MT05/fruitify/image/catalog/gallery/gallery1.jpg" alt="gallery"/></Col>
            <Col><img className="img-fluid" src="https://opencart.mahardhi.com/MT05/fruitify/image/catalog/gallery/gallery2.jpg" alt="gallery"/></Col>
            <Col><img className="img-fluid" src="https://opencart.mahardhi.com/MT05/fruitify/image/catalog/gallery/gallery3.jpg" alt="gallery"/></Col>
            <Col><img className="img-fluid" src="https://opencart.mahardhi.com/MT05/fruitify/image/catalog/gallery/gallery4.jpg" alt="gallery"/></Col>
            <Col><img className="img-fluid" src="https://opencart.mahardhi.com/MT05/fruitify/image/catalog/gallery/gallery5.jpg" alt="gallery"/></Col>
            <Col><img className="img-fluid" src="https://opencart.mahardhi.com/MT05/fruitify/image/catalog/gallery/gallery6.jpg" alt="gallery"/></Col>
            </Row> 
        </Container>
    );
};

export default Gallery;
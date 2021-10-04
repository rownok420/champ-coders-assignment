import React from "react";
import { Card, Col } from "react-bootstrap";
import './AboutInfo.css'

const AboutInfo = (props) => {
    const { name, images, designation } = props.detail;
    return (
        <Col>
            <Card className="h-100 card-style">
                <div className="card-image-contaienr">
                    <Card.Img variant="top" src={images} className="card-image" />
                </div>

                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h6>{designation}</h6>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AboutInfo;

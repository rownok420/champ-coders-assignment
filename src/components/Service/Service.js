import React from "react";
import { Card, Col } from "react-bootstrap";

const Service = (props) => {
    const {name, img, duration, certification, lessons} = props.course
    return (
        <Col>
            <Card className='h-100 card-style'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h6>
                        <span className="fw-bold">Duration: </span> {duration}{" "}
                    </h6>
                    <h6>
                        <span className="fw-bold">Certification: </span> {certification}{" "}
                    </h6>
                    <p>
                        <span className="fw-bold">Lessons: </span> {lessons}{" "}
                    </p>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;

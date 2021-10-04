import React from "react";
import { Card, Col } from "react-bootstrap";

const Course = (props) => {
    const { name, img, duration, certification, lessons, fee } = props.course;
    return (
        <Col>
            <Card className="h-100 card-style">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h6>
                        <span className="fw-bold">Duration: </span> {duration}{" "}
                    </h6>
                    <h6>
                        <span className="fw-bold">Certification: </span>{" "}
                        {certification}{" "}
                    </h6>

                    <p>
                        <span className="fw-bold">Lessons: </span> {lessons}{" "}
                    </p>
                    <h6>
                        <span className="fw-bold">Course Fee: </span> {fee}{" "}
                    </h6>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;

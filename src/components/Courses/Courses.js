import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from '../../images/img-1.jpg'
import img2 from '../../images/img-2.jpg'
import img3 from '../../images/img-3.jpg'
import img4 from '../../images/img-4.jpg'

const Courses = () => {
    return (
        <div className="container my-5">
            <div>
                <h1 className="my-5 activity-heading">Our Services</h1>
            </div>
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    <Col>
                        <Card className='h-100'>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Web development</Card.Title>
                                <h6><span className='fw-bold'>Duration: </span> 6 months </h6>
                                <h6><span className='fw-bold'>Certification: </span> Yes </h6>
                                <p><span className='fw-bold'>Lessons: </span> 15 </p>
                            </Card.Body>
                        </Card>
                    </Col>
                }
                {
                    <Col>
                        <Card className='h-100'>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Web design</Card.Title>
                                <h6><span className='fw-bold'>Duration: </span> 5 months </h6>
                                <h6><span className='fw-bold'>Certification: </span> No </h6>
                                <p><span className='fw-bold'>Lessons: </span> 5 </p>
                            </Card.Body>
                        </Card>
                    </Col>
                }
                {
                    <Col>
                        <Card className='h-100'>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>Graphics design</Card.Title>
                                <h6><span className='fw-bold'>Duration: </span> 6 months </h6>
                                <h6><span className='fw-bold'>Certification: </span> Yes </h6>
                                <p><span className='fw-bold'>Lessons: </span> 10 </p>
                            </Card.Body>
                        </Card>
                    </Col>
                }
                {
                    <Col>
                        <Card className='h-100'>
                            <Card.Img variant="top" src={img4} />
                            <Card.Body>
                                <Card.Title>Digital marketing</Card.Title>
                                <h6><span className='fw-bold'>Duration: </span> 3 months </h6>
                                <h6><span className='fw-bold'>Certification: </span> Yes </h6>
                                <p><span className='fw-bold'>Lessons: </span> 6 </p>
                            </Card.Body>
                        </Card>
                    </Col>
                }
            </Row>
            <div>
                <Link to="/services">
                        <button className="home-button mt-5">All Courses</button>
                </Link>
            </div>
        </div>
    );
};

export default Courses;

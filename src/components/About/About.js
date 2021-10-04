import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./About.css";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/4.jpg";
import img4 from "../../images/5.jpg";
import img5 from "../../images/6.jpg";
import img6 from "../../images/7.jpg";

const About = () => {
    return (
        <div className="container my-5">
            <div>
                <h1 className="my-4 activity-heading">Our Team</h1>
                <p className='mb-5'>
                    Moment in the life of any aspiring astronomer of that it is
                    time to buy that <br /> firsttelescope. It’s exciting to
                    think about setting up your own viewing.
                </p>
            </div>

            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    <Col>
                        <Card className="h-100 card-style">
                            <div className="card-image-contaienr">
                                <Card.Img
                                    variant="top"
                                    src={img1}
                                    className="card-image"
                                />
                            </div>

                            <Card.Body>
                                <Card.Title>Aurore Caldwell</Card.Title>
                                <h6>Web Devloper</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                }
                {
                    <Col>
                        <Card className="h-100 card-style">
                            <div className="card-image-contaienr">
                                <Card.Img
                                    variant="top"
                                    src={img2}
                                    className="card-image"
                                />
                            </div>
                            <Card.Body>
                                <Card.Title>Phillip Almon</Card.Title>
                                <h6>Web Designer</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                }
                {
                    <Col>
                        <Card className="h-100 card-style">
                            <div className="card-image-contaienr">
                                <Card.Img
                                    variant="top"
                                    src={img3}
                                    className="card-image"
                                />
                            </div>
                            <Card.Body>
                                <Card.Title>John Downing</Card.Title>
                                <h6>Graphics Designer</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                }
                {
                    <Col>
                        <Card className="h-100 card-style">
                            <div className="card-image-contaienr">
                                <Card.Img
                                    variant="top"
                                    src={img4}
                                    className="card-image"
                                />
                            </div>
                            <Card.Body>
                            <Card.Title>Jason Bowman</Card.Title>
                                <h6>Product Designer</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                }
                {
                    <Col>
                        <Card className="h-100 card-style">
                            <div className="card-image-contaienr">
                                <Card.Img
                                    variant="top"
                                    src={img5}
                                    className="card-image"
                                />
                            </div>
                            <Card.Body>
                                <Card.Title>Jhoan Voss</Card.Title>
                                <h6>Media Manager</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                }
                {
                    <Col>
                        <Card className="h-100 card-style">
                            <div className="card-image-contaienr">
                                <Card.Img
                                    variant="top"
                                    src={img6}
                                    className="card-image"
                                />
                            </div>
                            <Card.Body>
                                <Card.Title>Zukar Marin</Card.Title>
                                <h6>Software Engineer</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                }
            </Row>
        </div>
    );
};

export default About;

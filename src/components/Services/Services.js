import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("./service.JSON")
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);

    return (
        <div className="container">
            <div>
                <h1 className="my-4 activity-heading">Courses We Offer</h1>
            </div>
            <Row xs={1} md={2} lg={4} className="g-4 my-5">
                {
                    courses.map(course => <Service key={course.id} course={course} />)
                }
            </Row>
        </div>
    );
};

export default Services;

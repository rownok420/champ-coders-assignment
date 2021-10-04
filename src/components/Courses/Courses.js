import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {

    // Load data from json file 
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("./course.JSON")
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);

    return (
        <div className="container my-5">
            <div>
                <h1 className="my-5 activity-heading">Our Services</h1>
            </div>
            <Row xs={1} md={2} lg={4} className="g-4 my-5">
                {
                    courses.map(course => <Course key={course.id} course={course}/> )
                }
            </Row>
            <div>
                <Link to="/services">
                        <button className="home-button mt-2 mb-4">All Courses</button>
                </Link>
            </div>
        </div>
    );
};

export default Courses;

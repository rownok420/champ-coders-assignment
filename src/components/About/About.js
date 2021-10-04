import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import "./About.css";
import AboutInfo from "../AboutInfo/AboutInfo";


const About = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch("./teacher.JSON")
            .then((res) => res.json())
            .then((data) => setDetails(data));
    }, []);

    return (
        <div className="container my-5">
            <div>
                <h1 className="my-4 activity-heading">Expert Teachers </h1>
                <p className='mb-5'>
                    Moment in the life of any aspiring astronomer of that it is
                    time to buy that <br /> firsttelescope. It’s exciting to
                    think about setting up your own viewing.
                </p>
            </div>

            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    details.map(detail => <AboutInfo key={detail.id} detail={detail} />)
                }
            </Row>
        </div>
    );
};

export default About;

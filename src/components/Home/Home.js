import React from 'react';
import Activity from '../Activity/Activity';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div>
            <Banner />
            <Activity />
            <Courses />
        </div>
    );
};

export default Home;
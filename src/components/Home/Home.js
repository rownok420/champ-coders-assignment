import React from 'react';
import Activity from '../Activity/Activity';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <Activity />
            <Courses />
            <Footer />
        </div>
    );
};

export default Home;
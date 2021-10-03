import React from "react";
import { Link } from "react-router-dom";
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="bg-img">
                <h1 className="heading">We are leading educational <br/> platform over country</h1>
                <p className='text-white py-3'>Collaborate Consulting exists to find the place where to being seemingly disparate interests meet</p>
                <Link to="/contact">
                    <button className="home-button"><i class="fas fa-user pe-2"></i>Contact us</button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;

import React from "react";
import './NotFound.css'
import { Link } from "react-router-dom";
import img from '../../images/notfound.png'

const NotFound = () => {
    return (
        <div className='container my-5'>
            <h1>
                Something went wrong,<span className='text'> Page not found!</span>
            </h1>
            <div>
                <img src={img} className='w-50' alt="" />
            </div>
            <Link to="/home">
                <button className="home-button">Go to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;

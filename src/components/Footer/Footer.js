import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#FF3614",
        textDecoration: "underline",
    };
    return (
        <div className="bg-dark text-white">
            <div className="container">
                <div className="row pt-4 pb-2">
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <h2>Champ Coder's</h2>
                        <p>
                            Millions of people of all ages and from around the
                            world are improving their lives with us.We work with
                            a passion of taking challenges and creating new ones
                            in advertising sector.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <h4>Top Category</h4>
                        <span>Graphic Design</span>
                        <br />
                        <span>Web Design</span>
                        <br />
                        <span>Business</span>
                        <br />
                        <span>Marketing</span>
                        <br />
                        <span>Engineering</span>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <h4>Quic Links</h4>
                        <NavLink className='text-white text-decoration-none' activeStyle={activeStyle} to="/home">
                            Home
                        </NavLink><br/>
                        <NavLink className='text-white text-decoration-none' activeStyle={activeStyle} to="/services">
                            Services
                        </NavLink><br/>
                        <NavLink className='text-white text-decoration-none' activeStyle={activeStyle} to="/about">
                            About us
                        </NavLink><br/>
                        <NavLink className='text-white text-decoration-none' activeStyle={activeStyle} to="/contact">
                            Contact us
                        </NavLink>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <h4>Follow us</h4>
                        <p>Subscribe our Youtube channel to get our latest update & news</p>
                        <div className='d-flex justify-content-around'>
                            <a href="https://www.facebook.com/"><i className="fab fa-2x fa-facebook-square text-white"></i></a>
                            <a href="https://www.linkedin.com/signup"><i className="fab fa-2x fa-linkedin text-white"></i></a>
                            <a href="https://twitter.com/?lang=en"><i className="fab fa-2x fa-twitter-square text-white"></i></a>
                            <a href="https://www.youtube.com/"><i className="fab fa-2x fa-youtube text-white"></i></a>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container pb-3">
                    <h5 className="text-center ">
                        Copyright &copy; 2021 All rights reserved | This Site Developed by <br/> <span className='header mt-2 d-inline-block'> Md. Rownok Jahan</span>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Footer;

import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="container my-5">
            <div>
                <h1 className="mt-4 mb-5 activity-heading">Contact Us</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div className="col">
                    <div className="card mb-3 w-100 h-100 card-style">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <div>
                                    <i className="far fa-envelope fa-6x p-3"></i>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">
                                        Email Address
                                    </h4>
                                    <p className="card-text">hello@edu.com</p>
                                    <p className="card-text">
                                        hello@envato.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-3 w-100 h-100 card-style">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <div>
                                    <i className="fas fa-phone-alt fa-6x p-3"></i>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">Phone Number</h4>
                                    <p className="card-text">1-888-452-1505</p>
                                    <p className="card-text">1-888-452-1340</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-3 w-100 h-100 card-style">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <div>
                                    <i className="fas fa-map-marker-alt fa-6x p-3"></i>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">Our Location</h4>
                                    <p className="card-text">
                                        30 Commercial Road
                                    </p>
                                    <p className="card-text">
                                        Dhaka, Bangladesh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="card-style my-5">
                    <div>
                        <h4 className="my-5 contact-heading pt-5">Get In Touch</h4>
                    </div>
                    <form action="/ad" className="w-50 m-auto">
                        <div className="mb-3">
                            <label className="mb-2">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="mb-2">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="mb-2">Feedback</label>
                            <textarea
                                style={{ resize: "none" }}
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="5"
                                placeholder="Write your feedback"
                            ></textarea>
                        </div>
                        <div className="mb-3 pb-5">
                            <button className="home-button mx-2">Submit</button>
                            <button className="home-button mx-2">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

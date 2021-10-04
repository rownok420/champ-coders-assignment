import React from "react";
import './Activity.css'
import img1 from '../../images/acti-1.png'
import img2 from '../../images/acti-2.png'
import img3 from '../../images/acti-3.png'
import img4 from '../../images/acti-4.png'

const Activity = () => {
    return (
        <div className="container my-5">
            <div>
                <h1 className='my-5 activity-heading'>Top Category</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div className="col">
                    <div className="card h-auto card-1 card-hover">
                        <img
                            src={img1}
                            width="80px"
                            height="83px"
                            className="m-auto mt-5 mb-4"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">Design</h5>
                            <p className="card-text text-center">2 Courses</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-auto card-2 card-hover">
                        <img
                            src={img2}
                            width="80px"
                            height="83px"
                            className="m-auto mt-5 mb-4"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">
                                Development
                            </h5>
                            <p className="card-text text-center">3 Courses</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-auto card-3 card-hover">
                        <img
                            src={img3}
                            width="80px"
                            height="83px"
                            className="m-auto mt-5 mb-4"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">
                                Javascript
                            </h5>
                            <p className="card-text text-center">1 Courses</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-auto card-4 card-hover">
                        <img
                            src={img4}
                            width="80px"
                            height="83px"
                            className="m-auto mt-5 mb-4"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">
                                Finance
                            </h5>
                            <p className="card-text text-center">1 Courses</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;

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
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div class="col">
                    <div class="card h-auto card-1 card-hover">
                        <img
                            src={img1}
                            width="80px"
                            height="83px"
                            class="m-auto mt-5 mb-4"
                            alt="..."
                        />
                        <div class="card-body">
                            <h5 class="card-title text-center">1200+ Topics</h5>
                            <p class="card-text text-center">Learn Anythings</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-auto card-2 card-hover">
                        <img
                            src={img2}
                            width="80px"
                            height="83px"
                            class="m-auto mt-5 mb-4"
                            alt="..."
                        />
                        <div class="card-body">
                            <h5 class="card-title text-center">
                                5100+ Students
                            </h5>
                            <p class="card-text text-center">Learn Development</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-auto card-3 card-hover">
                        <img
                            src={img3}
                            width="80px"
                            height="83px"
                            class="m-auto mt-5 mb-4"
                            alt="..."
                        />
                        <div class="card-body">
                            <h5 class="card-title text-center">
                                5K+ Test Token
                            </h5>
                            <p class="card-text text-center">Learn Anythings</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-auto card-4 card-hover">
                        <img
                            src={img4}
                            width="80px"
                            height="83px"
                            class="m-auto mt-5 mb-4"
                            alt="..."
                        />
                        <div class="card-body">
                            <h5 class="card-title text-center">
                                0012+ Assignments
                            </h5>
                            <p class="card-text text-center">Learn Everythings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;

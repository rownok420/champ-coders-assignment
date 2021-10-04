import React from "react";
import img from '../../images/enroll.png'

const Enroll = () => {
    return (
        <div>
            <h1 className='my-5 header'>No Courses Enrolled</h1>
            <div>
                <img src={img} className='w-25' alt="" />
            </div>
        </div>
    );
};

export default Enroll;

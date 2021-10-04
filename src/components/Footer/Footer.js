import React from "react";

const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <div className="container">
                <div className="row py-5">
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
                        <h4>Courses</h4>
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
                        <h4>Terms</h4>
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
                        <h4>Newsletter</h4>
                        <p>Subscribe our newsletter to get our latest update & news</p>
                        <div className='d-flex justify-content-between'>
                            <a href="/aad"><i className="fab fa-2x fa-facebook-square"></i></a>
                            <a href="/aa"><i className="fab fa-2x fa-linkedin"></i></a>
                            <a href="/"><i className="fab fa-2x fa-twitter-square"></i></a>
                            <a href="/"><i className="fab fa-2x fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container pb-3">
                    <p className="text-center ">
                        Copyright &copy; 2021 <span>Rownok Jahan</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;

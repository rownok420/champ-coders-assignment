import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#FF3614",
        textDecoration: "underline"
    };
    return (
        <Navbar className="nav-style" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    <NavLink className="fs-2 header" to="/">
                        Champ Coder's
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="navbarScroll"
                    className="bg-dark"
                />

                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
                        <NavLink activeStyle={activeStyle} to="/home">
                            Home
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/services">
                            Services
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/about">
                            About us
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/contact">
                            Contact us
                        </NavLink>
                    </Nav>
                    <NavLink to="/enroll">
                        <button className="home-button rounded-pill pb-2 mt-0">Enroll now</button>
                    </NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

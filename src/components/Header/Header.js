import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#FF3614",
        textDecoration: "underline",
    };
    return (
        <Navbar className='nav-style' variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <NavLink className="fs-2" to="/home">
                        Champ Coder's
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" className='bg-dark' />

                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
                        <NavLink activeStyle={activeStyle} to="/home">
                            Home
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/services">
                            Services
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/pricing">
                            Pricing
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/about">
                            About us
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/contact">
                            Contact us
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

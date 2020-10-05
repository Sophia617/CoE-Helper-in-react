import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';


const Navigation =() => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="#home">LET'S MAKE OUR WORK DAY EASIER </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">CoE Helper</Nav.Link>
                    <Nav.Link href="#importantDates">Dates</Nav.Link>
                    <Nav.Link href="#cricosFinder">CRICOS Finder</Nav.Link>
                    <Nav.Link href="#feesCalculator">Fees Calculator</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Navigation;
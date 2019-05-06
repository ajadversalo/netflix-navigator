import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Button, Form, FormControl} from 'react-bootstrap';

let NavBar = ({}) => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Netflix Navigator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="What's New?" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Within the last 1 week</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Within the last 2 weeks</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Within the last 3 weeks</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Within the past month</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Advanced Search</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Enter Title" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
)

export default NavBar;
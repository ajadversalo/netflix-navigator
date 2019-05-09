import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import QuickSearch from './QuickSearch.js';

let NavBar = (props) => (
    <Navbar bg="dark"  variant="dark" expand="lg">
        <Navbar.Brand href="#home">Netflix Navigator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link> */}
                <NavDropdown title="View" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Icon</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Detail</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">List</NavDropdown.Item>
                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown> 
                <Nav.Link href="#link" onClick={() => {props.fetchNewTitles(7, 'CA')}}>What's New?</Nav.Link>
                <Nav.Link href="#link" onClick={() => {props.toggleSearch()}}>Advanced Search</Nav.Link>


                
            </Nav>
            {/* <Form inline>
                <FormControl type="text" placeholder="Enter Title" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form> */}
            <QuickSearch 
                fetchTitles = {props.fetchTitles}
            />
        </Navbar.Collapse>
    </Navbar>
)

export default NavBar;
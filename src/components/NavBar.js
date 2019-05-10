import React from 'react';
import {Navbar, Nav, NavDropdown, Row, Col} from 'react-bootstrap';

let NavBar = (props) => (
    <Navbar bg="dark"  variant="dark" expand="lg">
        <Navbar.Brand href="#" onClick={() => {props.switchScreen("homePage")}} style={{color:'red'}}>Netflix Navigator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"> 
                <Nav.Link href="#" onClick={() => {props.fetchNewTitles(7, 'CA'); props.switchScreen('new')}}>What's New?</Nav.Link>
                <Nav.Link href="#" onClick={() => {props.switchScreen("advanced")}}>Advanced Search</Nav.Link>             
                {/* <NavDropdown title="Change View" id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={() => {props.changeView('icon')}}>Icon</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => {props.changeView('detail')}}>Detail</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => {props.changeView('list')}}>List</NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            {/* <QuickSearch 
                fetchTitles = {props.fetchTitles} 
                switchScreen = {props.switchScreen} 
                startYear        = {props.startYear} 
                endYear        = {props.endYear} 
                searchString = {props.searchString}
                submitQuickSearch = {props.submitQuickSearch}
                handleQuickSearchTextChange = {props.handleQuickSearchTextChange} 
                handleChange = {props.handleChange}
            /> */}
            <div>
                <Row>
                    <Col column sm="8">
                        <input className="form-control mr-sm-2" 
                            type="text"
                            placeholder="Quick Search"
                            name="searchString" 
                            value={props.searchString} 
                            onChange={props.handleChange}/>
                    </Col>
                    <Col column sm="1">
                        <button 
                            className="btn btn-outline-danger my-2 my-sm-0" 
                            type="button" 
                            onClick={() => {
                                    if(props.searchString.length > 2){                    
                                        props.submitQuickSearch()
                                    } else {
                                        alert("Minimum search entry is 3 characters.");
                                    }
                                }
                            }>Search
                        </button>
                    </Col>
                </Row>
         </div>
        </Navbar.Collapse>
    </Navbar>
)

export default NavBar;
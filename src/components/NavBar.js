import React from 'react';
import {Navbar, Nav, Row, Col, Dropdown} from 'react-bootstrap';
import AdvancedSearch from './AdvancedSearch';
let NavBar = (props) => (
    <Navbar bg="dark"  variant="dark" expand="lg">
        <Navbar.Brand href="#" onClick={() => {props.switchScreen("homePage")}} style={{color:'red'}}>Netflix Navigator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"> 
                <Nav.Link href="#" onClick={() => {props.fetchNewTitles(7, 'CA'); props.switchScreen('new')}}>What's New?</Nav.Link>
                {/* <Nav.Link href="#" onClick={() => {props.switchScreen("advanced")}}>Advanced Search</Nav.Link>              */}
            </Nav>
            <Col>
                    <Dropdown>
  <Dropdown.Toggle variant="danger" id="dropdown-basic">
    Advanced Search
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <AdvancedSearch
        fetchTitles = {props.fetchTitles}
        titles = {props.titles}
            fetchTitles = {props.fetchTitles}
            handleChange = {props.handleChange}
            startYear = {props.startYear}
            endYear = {props.endYear}
            changeView     = {props.changeView}
            type = {props.type}
            view={props.view} 
    />
  </Dropdown.Menu>
</Dropdown>
</Col>
            <div>
                <Row>
                    <Col column sm="8">
                        <input className="form-control mr-sm-2" 
                            type="text"
                            placeholder="Quick Search"
                            name="searchString" 
                            value={props.searchString} 
                            onChange={props.handleChange}
                        />
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
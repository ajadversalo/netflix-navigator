import React from 'react';
import {Navbar, Nav, Dropdown} from 'react-bootstrap';
import AdvancedSearch from './AdvancedSearchForm';

let NavBar = (props) => (
    <Navbar bg="dark"  variant="dark" expand="lg">
        <Navbar.Brand href="#" onClick={() => {props.switchScreen("homePage")}} style={{color:'red'}}>Netflix Navigator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"> 
                <Nav.Link href="#" onClick={() => {props.fetchNewTitles(7, 'CA'); }}>What's New?</Nav.Link>
                {/* Advanced Search Form */}
                <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
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
                        changeView = {props.changeView}
                        type = {props.type}
                        view={props.view} 
                    />
                </Dropdown.Menu>
                </Dropdown>
            </Nav>  
            {/* Quick Search Form */}
            <Nav>
                <input className="form-control mr-sm-2" 
                    type="text"
                    placeholder="Quick Search"
                    name="searchString" 
                    value={props.searchString} 
                    onChange={props.handleChange}
                />
                <button 
                    className="btn btn-outline-danger my-2 my-sm-0" 
                    type="button" 
                    onClick = {() => {
                            if(props.searchString.length > 2){ 
                                props.fetchTitles(props.searchString, props.startYear, props.endYear, "Any", "Any")
                            } else { alert("Minimum search entry is 3 characters."); }}
                    }>Search
                </button>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default NavBar;
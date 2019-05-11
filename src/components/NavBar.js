import React from 'react';
import {Navbar, Nav, Dropdown} from 'react-bootstrap';
import AdvancedSearch from './AdvancedSearchForm';
import Context from '../contexts/NetflixContext'

let NavBar = (props) => (
    <Context.Consumer>
         {({state, handleChange, fetchTitles, fetchNewTitles}) => 
    <Navbar bg="dark"  variant="dark" expand="lg">
        <Navbar.Brand href="#" onClick={() => {}} style={{color:'red'}}>Netflix Navigator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"> 
                <Nav.Link href="#" onClick={() => {fetchNewTitles(7, 'CA'); }}>What's New?</Nav.Link>
                {/* Advanced Search Form */}
                <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Advanced Search
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <AdvancedSearch/>
                </Dropdown.Menu>
                </Dropdown>
            </Nav>  
            {/* Quick Search Form */}
            <Nav>
                <input className="form-control mr-sm-2" 
                    type="text"
                    placeholder="Quick Search"
                    name="searchString" 
                    value={state.searchString} 
                    onChange={handleChange}
                />
                <button 
                    className="btn btn-outline-danger my-2 my-sm-0" 
                    type="button" 
                    onClick = {() => {
                            if(state.searchString.length > 2){ 
                                fetchTitles(state.searchString, state.startYear, state.endYear, "Any", "Any")
                            } else { alert("Minimum search entry is 3 characters."); }}
                    }>Search
                </button>
            </Nav>
        </Navbar.Collapse>
    </Navbar>}
    </Context.Consumer> 
)

export default NavBar;
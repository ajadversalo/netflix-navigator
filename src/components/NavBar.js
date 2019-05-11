import React from 'react';
import {Navbar, Nav, Dropdown, ButtonGroup, Button} from 'react-bootstrap';
import AdvancedSearch from './AdvancedSearchForm';
import Context from '../contexts/NetflixContext'

let NavBar = () => (
    <Context.Consumer>
         {({state, handleChange, fetchTitles, fetchNewTitles}) => 
        <Navbar bg="dark"  variant="dark" expand="lg">
        <Navbar.Brand href="#" onClick={() => {}} style={{color:'red'}}>Netflix Navigator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"> 
                <Nav.Link href="#" onClick={() => {fetchNewTitles(7, 'CA'); }}>What's New?</Nav.Link>
            </Nav>  
    {/* Quick Search */}
            <Nav>
                <input className="form-control mr-sm-2" 
                    type="text"
                    placeholder="Quick Search"
                    name="searchString" 
                    value={state.searchString} 
                    onChange={handleChange}/>
            </Nav>
            <Dropdown as={ButtonGroup}>
                <Button 
                    variant="danger"
                    onClick = {() => {
                        if(state.searchString.length > 2){ 
                            fetchTitles(state.searchString, state.startYear, state.currentYear, "Any", "Any")
                        } else { alert("Minimum search entry is 3 characters."); }}
                    }>Search
                </Button>
                <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
                <Dropdown.Menu>
    {/* Advanced Search Form */}
                    <AdvancedSearch/>
                </Dropdown.Menu>
            </Dropdown>;           
        </Navbar.Collapse>
        </Navbar>}
    </Context.Consumer> 
)

export default NavBar;
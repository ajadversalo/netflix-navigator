import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Dropdown, DropdownButton} from 'react-bootstrap';
import Context from '../contexts/NetflixContext'
import * as Constants from '../data/constants';
import Genres from '../data/genres';

let NetflixNav = () => (
    <Context.Consumer>
         {({state, fetchTitles, fetchNewTitles, clearTitles, clearAllTitles, handleChange}) => 
        <Navbar bg="dark"  variant="dark" expand="lg">
        <Navbar.Brand href="#" onClick={() => {clearAllTitles()}} style={{color:'red'}}>Netflix Navigator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"> 
                <Nav.Link href="#" onClick={() => {fetchNewTitles()}}>What's New</Nav.Link>
                <Nav.Link href="#" onClick={() => {fetchNewTitles()}}>Lucky Pick</Nav.Link>             
                
                {/* Map genre list from genres json  */}
                <NavDropdown title="Filters" id="basic-nav-dropdown" >
                    {Genres.map(genre => 
                        <NavDropdown.Item href="#" 
                            onClick={() => {fetchTitles('', 
                            Constants.EARLIEST_PRDUCTION_YEAR,
                            state.currentYear, 
                            Constants.DEFAULT_GET_ALL, 
                            genre.id, 
                            Constants.IMDB_MINIMUM_SCORE,  
                            Constants.IMDB_MAXIMUM_SCORE)}}>
                            {genre.title}
                        </NavDropdown.Item>)}
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">Top Rated</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            {/* Quick Search  */}
            <Form inline>
                <FormControl className="mr-sm-2"
                    type="text"
                    placeholder="Quick Search"
                    name="searchString" 
                    value={state.searchString} 
                    onChange={handleChange}/>
                <Button 
                    variant="outline-danger"
                    onClick = {() => {
                        if(state.searchString === null || state.searchString.length < 3){ 
                            alert("Minimum search entry is 3 characters.");                   
                        } else {  
                            fetchTitles(state.searchString, state.earliestYear, state.currentYear, "Any", "Any", 0, 10)
                        }}
                    }
                >Search</Button>
            </Form>             

        </Navbar.Collapse>
        </Navbar>}
    </Context.Consumer>
)

export default NetflixNav;
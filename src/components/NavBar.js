import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Dropdown, DropdownButton} from 'react-bootstrap';
import Context from '../contexts/NetflixContext'
import * as Constants from '../data/constants';
import Genres from '../data/genres';

{/*This navbar component links to the following functions
    1. What's New - Displays new content from the past 7 days
    2. Lucky Pick - Gathers content with IMDB rating higher than 8 then picks one from the list
    3. Filters - Contains content filters for different genres
    4. Quick Search - Enables text input of title, actor or genre */}

let NetflixNav = () => (
    <Context.Consumer>
         {({state, fetchTitles, fetchNewTitles, clearTitles, clearAllTitles, handleChange, pickRandomTitle, performSearch}) => 
        <Navbar bg="dark"  variant="dark" expand="lg">
        <Navbar.Brand href="#" onClick={() => {clearAllTitles()}} style={{color:'red'}}>Netflix Navigator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"> 
                <Nav.Link href="#" onClick={() => {fetchNewTitles()}}>What's New</Nav.Link>
                <Nav.Link href="#" onClick={() => {pickRandomTitle()}}>Lucky Pick</Nav.Link>             
                
                {/* Maps genre list from the genres json file */}
                <NavDropdown title="Filters" id="basic-nav-dropdown" >
                    {Genres.map(genre => 
                        <NavDropdown.Item href="#" 
                            onClick={() => {fetchTitles('', 
                            Constants.EARLIEST_PRODUCTION_YEAR,
                            state.currentYear, 
                            Constants.ALL_TYPES, 
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
            <Form inline onSubmit={e => { e.preventDefault();}}>
                <FormControl className="mr-sm-2"
                    type="text"
                    placeholder="Quick Search"
                    name="searchString" 
                    value={state.searchString} 
                    onChange={handleChange}
                    onKeyDown={(event) => {
                        if(event.keyCode==13){
                            performSearch();
                        }}
                    }              
                />
                <Button 
                    variant="outline-danger"
                    onClick={() => {performSearch()}}
                >Search</Button>
            </Form>             
        </Navbar.Collapse>
        </Navbar>}
    </Context.Consumer>
)

export default NetflixNav;
import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import Context from '../contexts/NetflixContext'
import * as Constants from '../data/constants';
import Genres from '../data/genres';
import { Route, Link } from 'react-router-dom'
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import '../style/NavBar.css';


{/*This navbar component links to the following functions
    1. What's New - Displays new content from the past 7 days
    2. Lucky Pick - Gathers content with IMDB rating higher than 8 then picks one from the list
    3. Filters - Contains content filters for different genres
    4. Quick Search - Enables text input of title, actor or genre */}

let NetflixNav = () => (
    <Context.Consumer>
         {({state, fetchTitles, fetchNewTitles, clearTitles, clearAllTitles, handleChange, pickRandomTitle, performQuickSearch}) => 
        <Navbar bg="dark"  variant="dark" expand="lg">
        {/* <Navbar.Brand href="/" onClick={() => {clearAllTitles()}} style={{color:'red'}}>Netflix Navigator</Navbar.Brand> */}
        <Link to = "/">
            <Navbar.Brand style={{color:'red'}}>Netflix Navigator</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">     
                {/* <Route render={({ history}) => ( 
                <Nav.Link onClick={() => {history.push('/table'); fetchNewTitles()}}>What's New</Nav.Link>                
                )} /> */}
                {/* <Nav.Link href="#" onClick={() => {pickRandomTitle()}}>Lucky Pick</Nav.Link>   */}

                    <Link to = "/search" className="navItem">
                        <Nav.Item>Search</Nav.Item>
                    </Link>
                    <Link to = "/new" className="navItem">
                        <Nav.Item onClick={() => {fetchNewTitles()}} >What's New</Nav.Item>
                    </Link>
                    <Link to = "/luckypick" className="navItem">
                        <Nav.Item   onClick={() => {pickRandomTitle()}} >Lucky Pick</Nav.Item>
                    </Link>
                    <Link to = "/filters" className="navItem">                
                        <Nav.Item>Filters</Nav.Item>          
                    </Link>
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
                        if(event.keyCode === 13){
                            performQuickSearch();
                        }}
                    }              
                />
                <Button 
                    variant="outline-danger"
                    onClick={() => {performQuickSearch()}}
                >Search</Button>
            </Form>             
        </Navbar.Collapse>
        </Navbar>}
    </Context.Consumer>
)

export default NetflixNav;
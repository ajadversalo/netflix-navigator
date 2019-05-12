import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import Search from './Search';
import Context from '../contexts/NetflixContext'
import Genres from '../data/enums';

let NavBar = () => (
    <Context.Consumer>
         {({state, fetchTitles, fetchNewTitles, clearTitles, clearAllTitles, handleChange}) => 
        <Navbar bg="dark"  variant="dark" expand="lg">
        <Navbar.Brand href="#" onClick={() => {clearAllTitles()}} style={{color:'red'}}>Netflix Navigator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"> 
                <Nav.Link href="#" onClick={() => {fetchNewTitles()}}>What's New</Nav.Link>
                <Nav.Link href="#" onClick={() => {fetchNewTitles()}}>Lucky Pick</Nav.Link>             
                <NavDropdown title="Filters" id="basic-nav-dropdown" >
                    {/* CREATE A LOOP THAN RENDERS THIS */}
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", Genres.ACTION, 0, 10)}}>Action and Adventure</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 7424, 0, 10)}}>Anime</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 783, 0, 10)}}>Children and Family Movies</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 31574, 0, 10)}}>Classic Movies</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 6548, 0, 10)}}>Comedy</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 5763, 0, 10)}}>Documentaries</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 26835, 0, 10)}}>Drama</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 8711, 0, 10)}}>Horror</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 7077, 0, 10)}}>Independent</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 1701, 0, 10)}}>Music</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 8883, 0, 10)}}>Romantic</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 1492, 0, 10)}}>Sci-Fi</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 4370, 0, 10)}}>Sports Movies</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 8933, 0, 10)}}>Thrillers</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 83, 0, 10)}}>TV Shows</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Top Rated</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" className="form-control mr-sm-2" 
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
            {/* <Search /> */}
        </Navbar.Collapse>
        </Navbar>}
    </Context.Consumer> 
)

export default NavBar;
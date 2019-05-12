import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Search from './Search';
import Context from '../contexts/NetflixContext'

let NavBar = () => (
    <Context.Consumer>
         {({state, fetchTitles, fetchNewTitles, clearTitles, clearAllTitles}) => 
        <Navbar bg="dark"  variant="dark" expand="lg">
        <Navbar.Brand href="#" onClick={() => {clearAllTitles()}} style={{color:'red'}}>Netflix Navigator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"> 
                <Nav.Link href="#" onClick={() => {fetchNewTitles()}}>What's New</Nav.Link>
                <Nav.Link href="#" onClick={() => {fetchNewTitles()}}>Lucky Pick</Nav.Link>             
                <NavDropdown title="Filters" id="basic-nav-dropdown" >
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 1365, 0, 10)}}>Action and Adventure</NavDropdown.Item>
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
            <Search />
        </Navbar.Collapse>
        </Navbar>}
    </Context.Consumer> 
)

export default NavBar;
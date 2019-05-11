import React from 'react';
import {Navbar, Nav, NavDropdown, ButtonGroup, Button} from 'react-bootstrap';
import Search from './Search';
import Context from '../contexts/NetflixContext'

let NavBar = () => (
    <Context.Consumer>
         {({state, handleChange, fetchTitles, fetchNewTitles, clearTitles}) => 
        <Navbar bg="dark"  variant="dark" expand="lg">
        <Navbar.Brand href="#" onClick={() => {clearTitles()}} style={{color:'red'}}>Netflix Navigator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"> 
                <Nav.Link href="#" onClick={() => {fetchNewTitles()}}>What's New</Nav.Link>
                <Nav.Link href="#" onClick={() => {fetchNewTitles()}}>Lucky Pick</Nav.Link>
                <NavDropdown title="Filters" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 1365)}}>Action and Adventure</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 7424)}}>Anime</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 783)}}>Children and Family Movies</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 31574)}}>Classic Movies</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 6548)}}>Comedy</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 5763)}}>Documentaries</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 26835)}}>Drama</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 8711)}}>Horror</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 7077)}}>Independent</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 1701)}}>Music</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 8883)}}>Romantic</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 1492)}}>Sci-Fi</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 4370)}}>Sports Movies</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 8933)}}>Thrillers</NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 83)}}>TV Shows</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>             
            <Search />
        </Navbar.Collapse>
        </Navbar>}
    </Context.Consumer> 
)

export default NavBar;
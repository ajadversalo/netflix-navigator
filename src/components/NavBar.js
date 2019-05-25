import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import Context from '../contexts/NetflixContext'
import * as Constants from '../data/Constants';
import Genres from '../data/genres';
import {connect} from 'react-redux';
import * as actionCreator from '../actions/actions';

{/*This navbar component links to the following functions
    1. What's New - Displays new content from the past 7 days
    2. Lucky Pick - Gathers content with IMDB rating higher than 8 then picks one from the list
    3. Filters - Contains content filters for different genres
    4. Quick Search - Enables text input of title, actor or genre */}

const NetflixNav = (props) => {
    return (
    <Context.Consumer>
         {({state, fetchTitles, fetchNewTitles, clearTitles, clearAllTitles, handleChange, pickRandomTitle, performQuickSearch}) => 
        <Navbar bg="dark"  variant="dark" expand="lg">
        <Navbar.Brand href="#" onClick={() => {props.clearAllTitles()}} style={{color:'red'}}>Netflix Navigator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"> 
                <Nav.Link href="#" onClick={() => { props.fetchNewTitles()}}>What's New</Nav.Link>
                <Nav.Link href="#" onClick={() => { props.luckyPick('', Constants.EARLIEST_PRODUCTION_YEAR, props.currentYear,
                                                                          Constants.ALL_TYPES, Constants.ALL_GENRES, Constants.IMDB_LUCKYPICK_MIN, 
                                                                          Constants.IMDB_LUCKYPICK_MAX)}}>Lucky Pick</Nav.Link>             
                
                {/* Maps genre list from the genres json file */}
                <NavDropdown title="Filters" id="basic-nav-dropdown" >
                    {Genres.map(genre => 
                        <NavDropdown.Item href="#" 
                            onClick={() => {props.fetchTitles('', 
                            Constants.EARLIEST_PRODUCTION_YEAR,
                            state.currentYear, 
                            Constants.ALL_TYPES, 
                            genre.id, 
                            Constants.DEFAULT_IMDB_MIN,  
                            Constants.DEFAULT_IMDB_MAX)}}>
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
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps', state);
    return {
        currentYear: state.currentYear
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('mapDispatchToProps', dispatch);
    return {
        clearAllTitles: () => {
            dispatch(actionCreator.clearAllTitles());
        },
        fetchNewTitles: () => {
            dispatch(actionCreator.fetchNewTitles())  
        },
        fetchTitles: (searchString, sYear, cYear, allTypes, genreid, imdbMin, imdbMax) => {
            dispatch(actionCreator.fetchTitles(searchString, sYear, cYear, allTypes, genreid, imdbMin, imdbMax))  
        },
        luckyPick: (searchString, sYear, cYear, allTypes, genreid, imdbMin, imdbMax) => {
                dispatch(actionCreator.luckyPick(searchString, sYear, cYear, allTypes, genreid, imdbMin, imdbMax))  
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NetflixNav);
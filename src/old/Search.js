import React from 'react';
import {Dropdown, ButtonGroup, Button, Row, Col, Form, FormControl} from 'react-bootstrap';
import Context from '../contexts/NetflixContext'

const Search = () => {
    return (
        <Context.Consumer>
            {({state, handleChange, fetchTitles}) => 
            <div>
            <Row>
                <Col style={{paddingRight:'1px'}}>
                <input className="form-control mr-sm-2" 
                    type="text"
                    placeholder="Quick Search"
                    name="searchString" 
                    value={state.searchString} 
                    onChange={handleChange}/>
                </Col>
                <Col style={{paddingLeft:'1px'}}>      
                    {/* <Dropdown as={ButtonGroup}> */}
                    <Button 
                        variant="danger"
                        onClick = {() => {
                            if(state.searchString === null || state.searchString.length < 3){ 
                                alert("Minimum search entry is 3 characters.");                   
                            } else {  
                                fetchTitles(state.searchString, state.earliestYear, state.currentYear, "Any", "Any", 0, 10)
                            }}
                        }>Search
                    </Button>
                    {/* <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
                    <Dropdown.Menu>
                        <Dropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 1365,0,10)}}>Action and Adventure</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 7424)}}>Anime</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 783)}}>Children and Family Movies</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 31574)}}>Classic Movies</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 6548)}}>Comedy</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 5763)}}>Documentaries</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 26835)}}>Drama</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 8711)}}>Horror</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 7077)}}>Independent</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 1701)}}>Music</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 8883)}}>Romantic</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 1492)}}>Sci-Fi</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 4370)}}>Sports Movies</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 8933)}}>Thrillers</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => {fetchTitles('', state.earliestYear, state.currentYear, "Any", 83)}}>TV Shows</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#action/3.4">Top Rated</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>   */}
                </Col>
            </Row>
            
            </div>}
        </Context.Consumer> 
    );
}
export default  Search;
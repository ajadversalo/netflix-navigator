import React from 'react';
import { Navbar, Nav, Dropdown, ButtonGroup, Button, Row, Col} from 'react-bootstrap';
import Context from '../contexts/NetflixContext'
import AdvancedSearch from '../components/AdvancedSearch'

const Search = () => {
    return (
        <Context.Consumer>
            {({state, handleChange, fetchTitles}) => 
            <div>
            <Row>
                <Col>
                <input className="form-control mr-sm-2" 
                    type="text"
                    placeholder="Quick Search"
                    name="searchString" 
                    value={state.searchString} 
                    onChange={handleChange}/>
                </Col>
                <Col>      
                    <Dropdown as={ButtonGroup}>
                    <Button 
                        variant="danger"
                        onClick = {() => {
                            if(state.searchString.length > 2){ 
                                fetchTitles(state.searchString, state.earliestYear, state.currentYear, "Any", "Any")
                            } else { alert("Minimum search entry is 3 characters."); }}
                        }>Search
                    </Button>
                    <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
                    <Dropdown.Menu>
                        <AdvancedSearch/>
                    </Dropdown.Menu>
                    </Dropdown>  
                </Col>
            </Row>
        </div>}
        </Context.Consumer> 
    );
}
export default  Search;
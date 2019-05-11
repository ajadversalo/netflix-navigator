import React, {Component} from 'react';
import {Form, Row, Button, Card} from 'react-bootstrap';
import Context from '../contexts/NetflixContext'

const AdvancedSearch = (props) => {
    return (
        <Context.Consumer>
            {({state, handleChange, fetchTitles}) => 
            <div>
            {/* {state.currentYear} */}
            <Card>
            <Card.Header><h5>Advanced Search</h5></Card.Header>
            <Card.Body>            
            <Form>
                <Form.Group as={Row}>
                    <Form.Control type="text" placeholder="Start Year" defaultValue={state.startYear} name="startYear" onChange={handleChange}/>       
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Control type="text" placeholder="End Year" defaultValue={state.endYear} name="endYear"  onChange={handleChange}/>   
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Control as="select" name ="type" onChange={handleChange}>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                        <option value="Any">Movies and Series</option>              
                    </Form.Control>       
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Control as="select" name="genreID" onChange={handleChange}>
                        <option value="1365">Action and Adventure</option>
                        <option value="783">Family Movies</option>
                        <option value="31574">Classic</option>
                        <option value="6548">Comedy</option>
                        <option value="5763">Drama</option>
                        <option value="6839">Documentary</option>
                        <option value="8711">Horror</option>              
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Row}>
                    <Button variant="primary" 
                        value="Search" 
                        onClick={()=>{
                            if (state.startYear < 1900 || state.endYear > 2019){
                                alert("Year cannot be less than 1900 and more than 2019");
                            } else {
                                fetchTitles('', state.startYear, state.endYear, state.type, state.genreID)
                            }
                        }}>
                            Search
                    </Button>
                </Form.Group>             
             </Form>
             </Card.Body>
            </Card>
        </div>}
        </Context.Consumer> 
    );
}
export default AdvancedSearch;
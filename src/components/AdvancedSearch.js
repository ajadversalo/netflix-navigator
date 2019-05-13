import React from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import Context from '../contexts/NetflixContext'
import Genres from '../data/genres';
import ContentTypes from '../data/contentTypes';

const AdvancedSearch = () => (
    <Context.Consumer>
        {({state, handleChange, fetchTitles}) => 
        <div>
        <Form>
            <Form.Row>
                <Col>
                    <Form.Label>Start Year: </Form.Label>
                    <Form.Control type="text" placeholder="Start Year" defaultValue={state.startYear} name="startYear" onChange={handleChange}/>       
                </Col>
                <Col>
                    <Form.Label>End Year: </Form.Label>
                    <Form.Control type="text" placeholder="End Year" defaultValue={state.endYear} name="endYear"  onChange={handleChange}/>   
            </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Form.Label>Type: </Form.Label>
                        <Form.Control as="select" name ="type" onChange={handleChange}>
                            {ContentTypes.map(type => <option value={type.id}>{type.title}</option>)}              
                        </Form.Control>       
                </Col>
                <Col>
                    <Form.Label>Genre: </Form.Label>
                    <Form.Control as="select" name="genreID" onChange={handleChange}>
                        {Genres.map(genre => <option value={genre.id}>{genre.title}</option>)}
                    </Form.Control>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Form.Label>Lowest IMDB Score: </Form.Label>
                    <Form.Control type="text" placeholder="Minimum IMDB score" defaultValue={state.imdbMin} name="imdbMin" onChange={handleChange}/>
                </Col>
                <Col>
                    <Form.Label>Highest IMDB Score: </Form.Label>
                    <Form.Control type="text" placeholder="Maximum IMDB score" defaultValue={state.imdbMax} name="imdbMax"  onChange={handleChange}/>   
            </Col>
            </Form.Row>
            <Button variant="primary" 
                value="Search" 
                onClick={()=>{
                    if (state.startYear < 1900 || state.endYear > 2019){
                        alert("Year cannot be less than 1900 or more than 2019");
                    } else if (state.imdbMin < 0 || state.imdbMax > 10) {
                        alert("IMDB score cannot be less than 0 or more than 10");
                    } else {
                        fetchTitles('', state.startYear, state.endYear, state.type, state.genreID, state.imdbMin, state.imdbMax)
                    }
                }}>
                    Search
            </Button>
            </Form>
    </div>}
    </Context.Consumer> 
);

export default AdvancedSearch;
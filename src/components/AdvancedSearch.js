import React from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import Context from '../contexts/NetflixContext'
import Genres from '../data/genres';
import ContentTypes from '../data/contentTypes';

{/* Simple component which allows detailed content search using the following data:
    1. Start Year
    2. End Year
    3. Content Type
    4. Content Genre
    5. IMDB Minimum Score
    6. IMDB Maximum Score */}

const AdvancedSearch = () => (
    <Context.Consumer>
        {({state, handleChange, fetchTitles, performAdvancedSearch}) => 
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
            <Button 
                variant="danger" 
                value="Search"
                style ={{marginTop:'10px'}} 
                onClick={()=>{ performAdvancedSearch()}}>
                    Search
            </Button>
            </Form>
    </div>}
    </Context.Consumer> 
);

export default AdvancedSearch;
import React from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import Context from '../contexts/NetflixContext'

const AdvancedSearch = () => {
    return (
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
                            <option value="movie">Movie</option>
                            <option value="series">Series</option>
                            <option value="Any">Movies and Series</option>              
                        </Form.Control>       
                    </Col>
                    <Col>
                        <Form.Label>Genre: </Form.Label>
                        <Form.Control as="select" name="genreID" onChange={handleChange}>
                            <option value="1365">Action and Adventure</option>
                            <option value="783">Family Movies</option>
                            <option value="31574">Classic</option>
                            <option value="6548">Comedy</option>
                            <option value="5763">Drama</option>
                            <option value="6839">Documentary</option>
                            <option value="8711">Horror</option>              
                        </Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Label>Min IMDB Rating: </Form.Label>
                        <Form.Control type="text" placeholder="Minimum IMDB score" defaultValue={state.imdbMin} name="imdbMin" onChange={handleChange}/>       
                    </Col>
                    <Col>
                        <Form.Label>Max IMDB Rating: </Form.Label>
                        <Form.Control type="text" placeholder="Maximum IMDB score" defaultValue={state.imdbMax} name="imdbMax"  onChange={handleChange}/>   
                </Col>
                </Form.Row>
                <Button variant="primary" 
                    value="Search" 
                    onClick={()=>{
                        if (state.startYear < 1900 || state.endYear > 2019){
                            alert("Year cannot be less than 1900 and more than 2019");
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
}
export default AdvancedSearch;
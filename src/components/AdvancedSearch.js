import React, {Component} from 'react';
import {Form, Row, Button, Card} from 'react-bootstrap';

const AdvancedSearch = (props) => {
    return (
        <div style={{margin:'10px'}}>
           <Card>
            <Card.Header><h5>Advanced Search</h5></Card.Header>
            <Card.Body>            
            <Form>
                <Form.Group as={Row}>
                    {/* <Form.Label column sm="2"> Production Year </Form.Label> */}
                    {/* <Form.Label column sm="10"> */}
                        <Form.Control type="text" placeholder="Start Year" defaultValue={props.startYear} name="startYear" onChange={props.handleChange}/>
                    {/* </Form.Label>    */}
                </Form.Group>
                <Form.Group as={Row}>
                    {/* <Form.Label column sm="2"> </Form.Label>
                    <Form.Label column sm="10"> */}
                        <Form.Control type="text" placeholder="End Year" defaultValue={props.endYear} name="endYear"  onChange={props.handleChange}/>
                    {/* </Form.Label>    */}
                </Form.Group>
                <Form.Group as={Row}>
                    {/* <Form.Label column sm="2"> Type </Form.Label> */}
                    {/* <Form.Label column sm="10"> */}
                        <Form.Control as="select" name ="type" onChange={props.handleChange}>
                            <option value="movie">Movie</option>
                            <option value="series">Series</option>
                            <option value="Any">Movies and Series</option>              
                        </Form.Control>
                    {/* </Form.Label>    */}
                </Form.Group>
                <Form.Group as={Row}>
                    {/* <Form.Label column sm="2">Genre</Form.Label> */}
                    {/* <Form.Label column sm="10"> */}
                        <Form.Control as="select" name="genreID" onChange={props.handleChange}>
                            <option value="1365">Action and Adventure</option>
                            <option value="783">Family Movies</option>
                            <option value="31574">Classic</option>
                            <option value="6548">Comedy</option>
                            <option value="5763">Drama</option>
                            <option value="6839">Documentary</option>
                            <option value="8711">Horror</option>              
                        </Form.Control>
                    {/* </Form.Label>    */}
                </Form.Group>
                <Form.Group as={Row}>
                    {/* <Form.Label column sm="2"> </Form.Label>
                    <Form.Label column sm="10"> */}
                        <Button variant="primary" 
                            value="Search" 
                            onClick={()=>{
                                if (props.startYear < 1900 || props.endYear > 2019){
                                    alert("Year cannot be less than 1900 and more than 2019");
                                } else {
                                    props.fetchTitles('', props.startYear, props.endYear, props.type, 1365)
                                }
                            }}>
                             Search
                        </Button>
                    {/* </Form.Label>    */}
                </Form.Group>             
             </Form>
             </Card.Body>
            </Card>
        </div> 
    );
}
export default AdvancedSearch;
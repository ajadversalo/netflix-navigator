import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, FormGroup, FormLabel, Row, Col, Button} from 'react-bootstrap';
class AdvancedSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            startYear: 1900,
            endYear: 2019,
            type: "movie",
            genreID: ''
        }
    }

handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
}

handleSubmit = () => {
    this.props.fetchTitles('', this.state.startYear, this.state.endYear, this.state.type, this.state.genreID)
}

render(){
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label><h3>Advanced Search</h3></Form.Label>
                    <Row>
                        <Form.Label>Production Year</Form.Label>
                        <Form.Control type="text" placeholder="Start" name="startYear" onChange={this.handleChange}/>
                        <Form.Label>Production End</Form.Label>
                        <Form.Control type="text" placeholder="End" name="endYear" onChange={this.handleChange}/>
                    </Row>
                    <Row>
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select" name ="type" onChange={this.handleChange}>
                            <option value="movie">Movie</option>
                            <option value="series">Series</option>
                            <option value="Any">Both</option>              
                        </Form.Control>
                    </Row>
                    <Row>
                        <Form.Label>Genre</Form.Label>
                        <Form.Control as="select" name="genreID" onChange={this.handleChange}>
                            <option value="1365">Action and Adventure</option>
                            <option value="783">Family Movies</option>
                            <option value="31574">Classic</option>
                            <option value="6548">Comedy</option>
                            <option value="5763">Drama</option>
                            <option value="6839">Documentary</option>
                            <option value="8711">Horror</option>              
                        </Form.Control>
                    </Row>
                </Form.Group>
                <Button variant="primary" value="Search" onClick={()=>{this.handleSubmit()}}>
                    Search
                </Button>
            </Form>
            <br />
        </div> 
    );
}
}
export default AdvancedSearch;
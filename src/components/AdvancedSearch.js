import React, {Component} from 'react';
import {Form, Row, Button, Card} from 'react-bootstrap';

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
        <div style={{margin:'10px'}}>
           <Card>
            <Card.Header><h5>Advanced Search</h5></Card.Header>
            <Card.Body>            
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm="2"> Production Year </Form.Label>
                    <Form.Label column sm="10">
                        <Form.Control type="text" placeholder="Start Year" defaultValue={this.state.startYear} name="startYear" onChange={this.handleChange}/>
                    </Form.Label>   
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="2"> </Form.Label>
                    <Form.Label column sm="10">
                        <Form.Control type="text" placeholder="End Year" defaultValue={this.state.endYear} name="endYear"  onChange={this.handleChange}/>
                    </Form.Label>   
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="2"> Type </Form.Label>
                    <Form.Label column sm="10">
                        <Form.Control as="select" name ="type" onChange={this.handleChange}>
                            <option value="movie">Movie</option>
                            <option value="series">Series</option>
                            <option value="Any">Movies and Series</option>              
                        </Form.Control>
                    </Form.Label>   
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">Genre</Form.Label>
                    <Form.Label column sm="10">
                        <Form.Control as="select" name="genreID" onChange={this.handleChange}>
                            <option value="1365">Action and Adventure</option>
                            <option value="783">Family Movies</option>
                            <option value="31574">Classic</option>
                            <option value="6548">Comedy</option>
                            <option value="5763">Drama</option>
                            <option value="6839">Documentary</option>
                            <option value="8711">Horror</option>              
                        </Form.Control>
                    </Form.Label>   
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="2"> </Form.Label>
                    <Form.Label column sm="10">
                        <Button variant="primary" 
                            value="Search" 
                            onClick={()=>{
                                if (this.state.startYear < 1900 || this.state.endYear > 2019){
                                    alert("Year cannot be less than 1900 and more than 2019");
                                } else {
                                    this.handleSubmit();
                                }
                            }}>
                             Search
                        </Button>
                    </Form.Label>   
                </Form.Group>             
             </Form>
             </Card.Body>
            </Card>
        </div> 
    );
}
}
export default AdvancedSearch;
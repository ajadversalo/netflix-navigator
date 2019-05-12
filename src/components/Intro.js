import React from 'react';
import {Jumbotron, Badge,Row, Col} from 'react-bootstrap';
import AdvancedSearch from '../components/AdvancedSearch'

let Intro = () => (
    <Jumbotron >  
        {/* <h1 className="d-flex justify-content-center">Welcome!</h1> */}
        {/* <hr class="my-4"></hr> */}
        {/* <h4 className="d-flex justify-content-center"><Badge variant="danger">To help you get started</Badge></h4>
        <hr class="my-4"></hr> */}
        <Row>
        <Col>
        <p><Badge variant="danger">What's New</Badge></p>
        <p> Displays new content from the past week</p>
        <p><Badge variant="danger">Lucky Pick</Badge></p>
        <p> Picks a random title for you</p>  
        <p><Badge variant="danger">Filters</Badge></p> 
        <p> Contains list of genre filters</p>  
        <p><Badge variant="danger">Quick Search</Badge></p>
        <p> Allows searching for titles, actors or genre</p>
        </Col>
        <Col>
            <p><Badge variant="danger">If you prefer a more granular search </Badge></p>   
            <AdvancedSearch></AdvancedSearch>
        </Col>
        </Row>
    </Jumbotron>
)

export default Intro;
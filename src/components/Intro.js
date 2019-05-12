import React from 'react';
import {Jumbotron, Badge,Row, Col} from 'react-bootstrap';
import AdvancedSearch from '../components/AdvancedSearch'
import Context from '../contexts/NetflixContext'

let Intro = () => (
    <Jumbotron >
        <Context.Consumer>
            {({state, handleChange, fetchTitles}) =>   
       
        <Row>
        <Col>
        <h5><Badge variant="danger">NEW EPISODES</Badge></h5>
        <div >
                    {state.episodes.map(title => <li>{title.title}</li>)}
                </div>
        {/* <p><Badge variant="danger">What's New</Badge></p>
        <p> Displays new content from the past week</p>
        <p><Badge variant="danger">Lucky Pick</Badge></p>
        <p> Picks a random title for you</p>  
        <p><Badge variant="danger">Filters</Badge></p> 
        <p> Contains list of genre filters</p>  
        <p><Badge variant="danger">Quick Search</Badge></p>
        <p> Allows searching for titles, actors or genre</p> */}
        </Col>
        <Col>
            <h5><Badge variant="danger">DETAILED SEARCH</Badge></h5>   
            <AdvancedSearch></AdvancedSearch>
        </Col>
        </Row>}
        </Context.Consumer>
    </Jumbotron>
)

export default Intro;

 {/* <h1 className="d-flex justify-content-center">Welcome!</h1> */}
        {/* <hr class="my-4"></hr> */}
        {/* <h4 className="d-flex justify-content-center"><Badge variant="danger">To help you get started</Badge></h4>
        <hr class="my-4"></hr> */}
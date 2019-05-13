import React from 'react';
import Context from '../contexts/NetflixContext'
import {Jumbotron, Badge, Row, Col} from 'react-bootstrap';
import AdvancedSearch from '../components/AdvancedSearch'

{/* Intro page containing a list of the new episodes and the advanced search form*/}
let Intro = () => (
    <Jumbotron >
        <Context.Consumer>
            {({state}) =>   
        <Row>
            <Col>
                <h1 className="d-flex justify-content-start">Welcome!</h1>
                <hr class="my-4"></hr>
                <h5><Badge variant="danger">NEW EPISODES</Badge></h5>
                <div>
                    {state.episodes.map(title => <li>{title.title}</li>)}
                </div>
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

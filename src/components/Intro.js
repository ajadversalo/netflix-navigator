import React from 'react';
import {Jumbotron, Badge, Row, Col, Button, OverlayTrigger, Popover} from 'react-bootstrap';
import AdvancedSearch from '../components/AdvancedSearch';
import {connect} from 'react-redux';
import * as Constants from '../data/constants';
import {fetchTitles} from '../actions/actions';
import Carousel from '../components/Carousel';
import { bindActionCreators } from 'redux';

{/* Intro page containing a list of the new content and the advanced search form*/}

let Intro = (props) => {
    
    const popover = (
        <Popover id="popover-basic" title="Features">
            <strong>What's New</strong>
            <p>Display new titles added over the past week.</p>
            <strong>Lucky Pick</strong>
            <p>Can't decide what to watch? Let us do that for you.</p>
            <strong>Quick Search</strong> 
            <p>Search content by title, actor or genre.</p>
            <strong>Detailed Search</strong>
            <p>Search using attributes.</p>
            <strong>And best of all</strong>
            <p>No active Netflix subscription required, browse before signing up!</p>
        </Popover>
    );
          
    return (
        <Jumbotron >
            <Row>
                <Col>
                <h3>Welcome to Netflix Navigator! </h3>
                <p>Spend less time browsing and more time watching.</p>
                <OverlayTrigger
                    key={'bottom'}
                    placement={'right'}
                    overlay = {popover}>
                    <Button variant="secondary">Getting Started</Button>
                </OverlayTrigger>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col><Carousel/></Col>
            </Row>
        </Jumbotron>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchTitles: fetchTitles
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Intro);

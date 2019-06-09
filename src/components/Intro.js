import React from 'react';
import {Jumbotron, Badge, Row, Col} from 'react-bootstrap';
import AdvancedSearch from '../components/AdvancedSearch';
import {connect} from 'react-redux';
import * as actionCreator from '../actions/actions';
import * as Constants from '../data/Constants';
import { fetchNewTitles, luckyPick} from '../actions/actions';
import Carousel from '../components/Carousel';
import { bindActionCreators } from 'redux';

{/* Intro page containing a list of the new content and the advanced search form*/}
let Intro = (props) => {
    return (
        <Jumbotron >
            <Row>
                <Col>
                <h3>Welcome to Netflix Navigator! </h3>
                <p>Spend less time browsing and more time watching.</p>
                <hr />
                <h5><Badge variant="danger">Features:</Badge></h5>
                <ul>
                    <li><a href='#' onClick={ props.fetchNewTitles}><b>What's New</b></a> - Display new titles added over the past week.</li>
                    <li><a href='#' onClick={ () => props.luckyPick('', Constants.EARLIEST_PRODUCTION_YEAR, props.currentYear,
                                                                          Constants.ALL_TYPES, Constants.ALL_GENRES, Constants.IMDB_LUCKYPICK_MIN, 
                                                                          Constants.IMDB_LUCKYPICK_MAX)}><b>Lucky Pick</b></a> - Can't decide what to watch? Let us do that for you.
                    </li>
                    <li><b>Filters</b> - Display content categorized by genre</li>
                    <li><b>Quick Search</b> - Search content by title, actor or genre</li>
                    <li><b>Detailed Search</b> - Search using attributes</li>
                </ul>  
                <hr /> 
                </Col>
            </Row>
            <Row>
                <Col><Carousel/></Col>
            </Row>
        </Jumbotron>
    )
}

const mapStateToProps = (state) => {
    return {
        currentYear: state.currentYear,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchNewTitles: fetchNewTitles,
        luckyPick: luckyPick
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Intro);

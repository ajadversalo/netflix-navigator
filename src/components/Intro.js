import React from 'react';
import {Jumbotron, Badge, Row, Col} from 'react-bootstrap';
import AdvancedSearch from '../components/AdvancedSearch';
import {connect} from 'react-redux';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import * as actionCreator from '../actions/actions';
import Icon from 'react-fa';
import ProgressiveImage from 'react-progressive-image'

{/* Intro page containing a list of the new content and the advanced search form*/}
let Intro = (props) => {
    return (
        <Jumbotron >
            <Row>
                <Col>
                <h5>Welcome to Netflix Navigator! </h5>
                <p>Stop wasting time browsing, spend more time watching.</p>
                <hr />
                <h6><Badge variant="danger">Features:</Badge></h6>
                <ul>
                    <li><a href='#'><b>What's New</b></a> - Display new titles added over the past week.</li>
                    <li><a href='#'><b>Lucky Pick</b></a> - Can't decide what to watch? Let us do that for you.</li>
                    <li><b>Filters</b> - Display content categorized by genre</li>
                    <li><b>Quick Search</b> - Search content by title, actor or genre</li>
                    <li><b>Detailed Search</b> - Search using attributes</li>
                </ul>  
                <hr /> 
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel
                        slidesPerPage={3}
                        slidesPerScroll={2}
                        animationSpeed={500}
                        autoPlay={5000}
                        stopAutoPlayOnHover
                        offset={100}
                        itemWidth={180}
                        infinite
                        arrowLeft={<a href="#"><h1 style={{color:'gray'}}><Icon className="icon-example" name="angle-double-left"/></h1></a>}
                        arrowRight={<a href="#"><h1 style={{color:'gray'}}><Icon className="icon-example" name="angle-double-right"/></h1></a>}
                        addArrowClickHandler>
                        {props.episodes.map(title => <a href="#" onClick={()=>{props.fetchTitleDetail(title.netflixid)}}>
                        <ProgressiveImage  src={title.image} placeholder={require('../default.jpg')}>
                            {src => <img src={src} alt={title.title} />}
                        </ProgressiveImage></a>)}                                        
                    </Carousel>
                </Col>
            </Row>
        </Jumbotron>
    )
}

const mapStateToProps = (state) => {
    return {
        episodes: state.episodes

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTitleDetail: (netflixid) => {
            dispatch(actionCreator.fetchTitleDetail (netflixid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intro);

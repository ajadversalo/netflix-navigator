import React from 'react';
import {Jumbotron, Badge, Row, Col} from 'react-bootstrap';
import AdvancedSearch from '../components/AdvancedSearch';
import {connect} from 'react-redux';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

{/* Intro page containing a list of the new episodes and the advanced search form*/}
let Intro = (props) => {
    return (
        <Jumbotron >
            <Row>
                <Col>
                <h5>Welcome to Netflix Navigator! </h5>
                <hr />
                <h6><Badge variant="danger">Getting started:</Badge></h6>
                <ul>
                    <li><b>What's New</b> - Display new titles added over the past week.</li>
                    <li><b>Lucky Pick</b> - Can't decide what to watch? Let us do that for you.</li>
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
                        autoPlay={15000}
                        stopAutoPlayOnHover
                        offset={100}
                        itemWidth={180}
                        infinite>
                        {props.episodes.map(title => <img src={title.image} alt='new content'/>)}                    
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

export default connect(mapStateToProps)(Intro);

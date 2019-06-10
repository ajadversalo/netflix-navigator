import React from 'react';
import {connect} from 'react-redux';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import * as actionCreator from '../actions/actions';
import Icon from 'react-fa';
import ProgressiveImage from 'react-progressive-image'

const MainCarousel = (props) => {
    return (
        <Carousel
            slidesPerPage={3}
            slidesPerScroll={2}
            animationSpeed={500}
            autoPlay={5000}
            stopAutoPlayOnHover
            offset={100}
            itemWidth={180}
            infinite
            // arrowLeft={<a href="#"><h1 style={{color:'#d33030'}}><Icon className="icon-example" name="arrow-circle-left"/></h1></a>}
            // arrowRight={<a href="#"><h1 style={{color:'#d33030'}}><Icon className="icon-example" name="arrow-circle-right"/></h1></a>}
            // addArrowClickHandler
            >
            {props.episodes.map(title => <a href="#" onClick={()=>{props.fetchTitleDetail(title.netflixid)}}>
            <ProgressiveImage  src={title.image} placeholder={require('../default.jpg')}>
                {src => <img src={src} alt={title.title} />}
            </ProgressiveImage></a>)}                                        
        </Carousel>
    )
}
const mapStateToProps = (state) => {
    return {
        episodes: state.main.episodes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTitleDetail: (netflixid) => {
            dispatch(actionCreator.fetchTitleDetail (netflixid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainCarousel);
import React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../actions/actions';
import ProgressiveImage from 'react-progressive-image'

const TableIcon = (props) => {
    return (     
        <div className="d-flex justify-content-center" style={{ flexWrap: 'wrap'}}>
            { props.allTitles.map(title => 
                <a href="#" onClick={()=>{props.fetchTitleDetail(title.netflixid)}}>
                    <ProgressiveImage  src={title.image} placeholder={require('../default.jpg')}>
                        {src => <img  style={{margin: '5px' ,width: '120px'}} src={src} alt={title.title} />}
                    </ProgressiveImage>
                </a>)
            }
        </div>  
    )
}

const mapStateToProps = (state) => {
    return {
        allTitles: state.main.allTitles,
        count: state.main.count,
        view: state.main.view,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTitleDetail: (netflixid) => {
            dispatch(actionCreator.fetchTitleDetail (netflixid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableIcon);
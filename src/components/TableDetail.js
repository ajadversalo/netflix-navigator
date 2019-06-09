import React from 'react';
import TableDetailItem from './TableDetailItem'
import {connect} from 'react-redux';
import * as actionCreator from '../actions/actions';

const TableDetail = (props) => {
    return (     
        <div>
            {props.allTitles.map(title => <a onClick={()=>{props.fetchTitleDetail(title.netflixid)}}>
                <TableDetailItem title={title} sanitizeString={props.sanitizeString} onclick={()=>{props.fetchTitleDetail(title.netflixid)}}/></a>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        allTitles: state.allTitles,
        count: state.count,
        view: state.view,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTitleDetail: (netflixid) => {
            dispatch(actionCreator.fetchTitleDetail (netflixid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableDetail);
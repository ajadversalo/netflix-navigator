import React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../actions/actions';

const TableList = (props) => {
    return (         
        <div >
            <ol className="list-group">
                {props.allTitles.map(title => 
                    <li> 
                        <a href="#" onClick={()=>{props.fetchTitleDetail(title.netflixid)}}><b>{props.sanitizeString(title.title)}</b></a> 
                        <p>{props.sanitizeString(title.synopsis)}</p>
                        <span class="badge badge-warning badge-pill">IMDB Score: {title.rating}</span>
                        <hr />
                    </li>
                    
                    )
                }
            </ol>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        allTitles: state.allTitles,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTitleDetail: (netflixid) => {
            dispatch(actionCreator.fetchTitleDetail (netflixid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableList);
import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';
import TitleDetail from './TitleDetail.js'
import Intro from '../components/Intro.js'
import {connect} from 'react-redux';
import Store from '../store/Store';
import * as actionCreator from '../actions/actions';

/* This component displays a table with three different formats(Icon, Detail and List) depending on the view property received*/
const Table = (props) => {

    if (!props.allTitles) {
        return null;
    }

    return (     
        <div>     
            {/* View type selection buttons */}
            { props.allTitles.length > 0 &&
            <div>
                <span className="badge badge-light">Query returned {props.count} results</span>
                <div className="d-flex justify-content-center" style={{marginBottom:"10px"}}>     
                    <ButtonGroup size="sm" className="mt-4">
                        <Button variant="danger" onClick={() => {props.onChangeView('icon')}}>Icon</Button>
                        <Button variant="danger" onClick={() => {props.onChangeView('detail')}}>Detail</Button>
                        <Button variant="danger" onClick={() => {props.onChangeView('list')}}>List</Button>
                    </ButtonGroup>
                </div>
            </div>}
            {/* Welcome page and advanced search */}
            {props.allTitles.length === 0 && <Intro store={Store}/>}
            {/* Icon View */}
            { props.view === 'icon' &&
            <div className="d-flex justify-content-center" style={{ flexWrap: 'wrap'}}>
                {props.allTitles.map(title => <a href="#" onClick={()=>{
                    props.fetchTitleDetail(title.netflixid)
                    }}><img src={title.image} alt={title.title} style={{margin: '5px' ,width: '120px'}}/></a> )}
            </div>}   
            {/* Detail View */}       
            {props.view === 'detail' &&
            <div>
                {props.allTitles.map(title => <a onClick={()=>{props.fetchTitleDetail(title.netflixid)}}>
                    <TitleDetail title={title} sanitizeString={props.sanitizeString} onclick={()=>{props.fetchTitleDetail(title.netflixid)}}/></a>)}
            </div>}
            {/* List View */}
            {props.view === 'list' &&
            <div >
                <ol className="list-group">
                    {props.allTitles.map(title => 
                        <li> 
                            <a href="#" onClick={()=>{props.fetchTitleDetail(title.netflixid)}}><b>{props.sanitizeString(title.title)}</b></a> 
                            <p>{props.sanitizeString(title.synopsis)}</p>
                            <span class="badge badge-warning badge-pill">IMDB Score: {title.rating}</span>
                        </li>
                        )
                    }
                </ol>
            </div>}
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
        onChangeView: (value) => {
            dispatch(actionCreator.changeView(value));
        },
        fetchTitleDetail: (netflixid) => {
            dispatch(actionCreator.fetchTitleDetail (netflixid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
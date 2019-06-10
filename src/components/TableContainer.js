import React from 'react';
import Intro from '../components/Intro.js'
import {connect} from 'react-redux';
import TableIcon from './TableIcon';
import TableDetail from './TableDetail';
import TableList from './TableList';
import TableViewButtons from './TableViewButtons';

/* This component displays a table with three different formats(Icon, Detail and List) depending on the view property received*/
const TableContainer = (props) => {

    if (!props.allTitles) {
        return null;
    }

    return (     
        <div>
            {/* View type selection buttons */}
            { props.allTitles.length > 0 && <TableViewButtons/> }
            
            {/* Welcome page and advanced search */}
            {props.allTitles.length < 1 && <Intro />}
            
            {/* Icon View */}
            { props.view === 'icon' && <TableIcon/> }
            
            {/* Detail View */}       
            {props.view === 'detail' && <TableDetail sanitizeString={props.sanitizeString}/> }
           
            {/* List View */}
            {props.view === 'list' && <TableList sanitizeString={props.sanitizeString}/> }
        </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        allTitles: state.main.allTitles,
        view: state.main.view
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
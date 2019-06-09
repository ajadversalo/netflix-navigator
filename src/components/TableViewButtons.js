import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as actionCreator from '../actions/actions';

const TableViewButtons = (props) => {
    return (     
        <div>
            <span className="badge badge-light">Query returned {props.count} results</span>
            <div className="d-flex justify-content-center" style={{marginBottom:"10px"}}>     
                <ButtonGroup size="sm" className="mt-4">
                    <Button variant="danger" onClick={() => {props.onChangeView('icon')}}>Icon</Button>
                    <Button variant="danger" onClick={() => {props.onChangeView('detail')}}>Detail</Button>
                    <Button variant="danger" onClick={() => {props.onChangeView('list')}}>List</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        view: state.view,
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeView: (value) => {
            dispatch(actionCreator.changeView(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableViewButtons);
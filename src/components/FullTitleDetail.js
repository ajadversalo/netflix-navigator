import React from 'react';
import {Row, Col, Button, Image, Table} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as actionCreator from '../actions/actions';

{/* This component renders the complete details of a title. Data is saved to titleDetail state variable. 
    1. Plot 
    2. Cast 
    3. Director 
    4. Producer
    5. Genre
    6. Language
    7. IMDB Rating
    8. Runtime
 */}

const FullTitleDetail = (props) => {
    return (  
        <div >
            <Row className="d-flex justify-content-end" style={{margin:'10px'}}>
                <div >
                    <Button onClick={() => {props.onClearAllTitles()}} variant="danger">X</Button>
                </div>
            </Row>
            <Row >
                <Col style={{textAlign:'center'}} lg={4} sm={12}>
                    <h1>{props.sanitizeString(props.titleDetail.nfinfo.title)}</h1>
                    <a href={"https://www.netflix.com/title/" + props.titleDetail.nfinfo.netflixid} target="_blank">
                        <Image src={props.titleDetail.nfinfo.image1} alt={props.titleDetail.nfinfo.title} style={{padding: '5px'}}></Image>
                    </a>
                </Col>
                <Col lg={8} sm={12}>
                    <Table hover>
                        <tbody>
                            <tr>
                                <td><b>Plot</b></td>
                                <td>{props.sanitizeString(props.titleDetailPlot)}</td>
                            </tr>
                            <tr>
                                <td><b>Cast</b></td>
                                <td>{props.titleDetail.people[0].actor.map((item) => <label style={{marginRight:'3px'}}> {item}, </label>)}</td>
                            </tr>
                            <tr>
                                <td><b>Produced</b></td>
                                <td>{props.titleDetail.people[1].creator.map((item) => <label style={{marginRight:'3px'}}> {item}, </label>)}</td>
                            </tr>
                            <tr>
                                <td><b>Directed</b></td>
                                <td>{props.titleDetail.people[0].actor.map((item) => <label style={{marginRight:'3px'}}> {item}, </label>)}</td>
                            </tr>
                            <tr>
                                <td><b>Language</b></td>
                                <td>{props.titleDetail.imdbinfo.language}</td>
                            </tr>
                            <tr>
                                <td><b>Genre</b></td>
                                <td>{props.titleDetail.imdbinfo.genre}</td>
                            </tr>
                            <tr>
                                <td><b>IMDB Rating</b></td>
                                <td> <a href={"https://www.imdb.com/title/" + props.titleDetail.imdbinfo.imdbid} target="_blank"><p>{props.titleDetail.imdbinfo.rating}</p></a></td>
                            </tr>
                            <tr>
                                <td><b>Runtime</b></td>
                                <td>{props.titleDetail.imdbinfo.language}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>         
            <hr />
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps', state);
    return {
        titleDetail: state.titleDetail,
        titleDetailPlot: state.titleDetailPlot,
        titleDetailActors: state.titleDetailActors
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('mapDispatchToProps', dispatch);
    return {
        onClearAllTitles: () => {
            const action = {type: 'CLEAR_SELECTED_TITLE', value: null}
            dispatch(action);
        },

        fetchNewTitles: () => {
            dispatch(actionCreator.fetchNewTitles())  
        }
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(FullTitleDetail);
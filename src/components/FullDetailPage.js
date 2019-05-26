import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
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

const FullDetailPage = (props) => {
    return (  
        <div >
            <hr />
            <div className="d-flex justify-content-end">
                <Button onClick={() => {props.onClearAllTitles()}} variant="danger">X</Button>
            </div>   
             <h1>{props.sanitizeString(props.titleDetail.nfinfo.title)}</h1>
            <Row>
                <Col><img src={props.titleDetail.nfinfo.image1} alt={props.titleDetail.nfinfo.title}></img></Col>
                <Col>
                    {/* Only display plot if it's not null */}
                    { props.titleDetailPlot &&   
                        <div>
                            <h5>Plot</h5>
                            <p>{props.sanitizeString(props.titleDetailPlot)}</p>
                        </div>
                    }
                    <Button
                        variant="danger" 
                        href={"https://www.netflix.com/title/" + props.titleDetail.nfinfo.netflixid} 
                        target="_blank"
                        >Watch Now
                    </Button>
                </Col>
                <Col>
                    {/* Only display actor list if it's not null */}
                    { props.titleDetailActors &&
                        <div>
                            <b>Cast</b>
                            <ol>{props.titleDetail.people[0].actor.map((item) => <li key={item.id}>{item}</li>)}</ol>
                        </div>
                    }
                </Col>
                <Col>
                    <b>Produced</b>
                    <ol>{props.titleDetail.people[1].creator.map((item) => <li key={item.id}>{item}</li>)}</ol>
                    <b>Directed</b>
                    <ol>{props.titleDetail.people[2].director.map((item) => <li key={item.id}>{item}</li>)}</ol>                
                    <p><b>Genre </b>{props.titleDetail.imdbinfo.genre}</p>                  
                    <p><b>Language </b>{props.titleDetail.imdbinfo.language}</p>                
                    <a href={"https://www.imdb.com/title/" + props.titleDetail.imdbinfo.imdbid} target="_blank"><p><b>IMDB Rating </b>{props.titleDetail.imdbinfo.rating}</p></a>                   
                    <p><b>Runtime </b>{props.titleDetail.imdbinfo.runtime}</p>
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

export default  connect(mapStateToProps, mapDispatchToProps)(FullDetailPage);
import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import Context from '../contexts/NetflixContext'

const FullDetailPage = () => {
    return (
        <Context.Consumer>{({state, clearTitle}) =>     
        <div >
            <hr />
            <div className="d-flex justify-content-end">
                <Button onClick={() => {clearTitle()}} variant="danger">X</Button>
            </div>   
            <h1>{state.titleDetail.nfinfo.title}</h1>
            <Row>
                <Col><img src={state.titleDetail.nfinfo.image1}></img></Col>
                <Col>
                    <h5>Plot</h5>
                    <p>{state.titleDetail.imdbinfo.plot}</p>
                    </Col>
                    <Col>
                    <b>Cast</b>
                    <ol>{state.titleDetail.people[0].actor.map((item, index) => <li key={item.id}>{item}</li>)}</ol>
                </Col>
                <Col>
                    <b>Produced</b>
                    <ol>{state.titleDetail.people[1].creator.map((item, index) => <li key={item.id}>{item}</li>)}</ol>
                    <b>Directed</b>
                    <ol>{state.titleDetail.people[2].director.map((item, index) => <li key={item.id}>{item}</li>)}</ol>                
                    <p><b>Genre </b>{state.titleDetail.imdbinfo.genre}</p>                  
                    <p><b>Language </b>{state.titleDetail.imdbinfo.language}</p>                
                    <p><b>IMDB Rating </b>{state.titleDetail.imdbinfo.rating}</p>                   
                    <p><b>Runtime </b>{state.titleDetail.imdbinfo.runtime}</p>
                </Col>
            </Row>
            <hr />
        </div>}
        </Context.Consumer> 
    )
}

export default FullDetailPage;
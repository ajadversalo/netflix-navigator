import React from 'react';
import {Row, Col} from 'react-bootstrap';

const FullDetailPage = (props) => {
    return (  
        <div >
            <h1>{props.titleDetail.nfinfo.title}</h1>
           <Row>
                <Col>
                    <img src={props.titleDetail.nfinfo.image1}></img>
                </Col>
                <Col>
                    <p>Plot: {props.titleDetail.imdbinfo.plot}</p>
                    <p>Synopsis: {props.titleDetail.nfinfo.synopsis}</p>
                    <ol>
                        {props.titleDetail.people[0].actor.map((item, index) => <li key={item.id}>{item}</li>)}
                    </ol>
                </Col>
          </Row>
        </div> 
    )
}

export default FullDetailPage;
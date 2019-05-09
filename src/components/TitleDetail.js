import React from 'react';
import {Card, Row, Col} from 'react-bootstrap';

const TitleDetail = (props) => {
    return (
        <div>
        <Card>
            <Card.Header>{props.title.title}</Card.Header>
            <Card.Body>
                <Row>
                    <Col><img src={props.title.image}></img></Col>
                    <Col>
                        <p>{props.title.synopsis}</p>
                        <p>Released: {props.title.released}</p>
                        <p>RunTime: {props.title.runtime}</p>
                        <p>IMDB Rating: {props.title.rating}</p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        </div>
    )
}

export default TitleDetail;
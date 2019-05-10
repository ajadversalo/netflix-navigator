import React from 'react';
import {Jumbotron, Badge, Col, Row, Button, Container} from 'react-bootstrap';

let FormTest = () => (
    <div>
        <Container>
    <Row>
    <Col className="col-sm"><input type="text"></input></Col>
    <Col className="col-sm"><input type="text"></input></Col>
    <Col className="col-sm"><input type="text"></input></Col>
    <Col className="col-sm"><input type="text"></input></Col>
    <Col className="col-sm"><Button>Button</Button></Col>
    </Row>
    </Container>
</div>
   
)

export default FormTest;
import React from 'react';
import {Jumbotron, Form, Badge, hr} from 'react-bootstrap';

let Header = (props) => (
    <Jumbotron>
        <h1 class="display-4">Welcome to Netflix Navigator</h1>
        <hr class="my-4"></hr>
        <h4><Badge variant="secondary">What's New</Badge></h4>
        <p>Displays new content from the past week</p>
        <h4><Badge variant="secondary">Quick Search</Badge></h4>
        <p>Allows searching for titles, actors and even genre</p>
        <h4><Badge variant="secondary">Advanced Search</Badge></h4> 
        <p>If you want to be more specific on your searches</p>            
    </Jumbotron>
)

export default Header;
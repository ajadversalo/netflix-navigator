import React from 'react';
import {Jumbotron, Form} from 'react-bootstrap';

let Header = (props) => (
    <Jumbotron>
        <h1>New Titles on Netflix Canada</h1>
        <p>Here are the latest additions for the past week.</p>
        
            <button type="submit" title="asd" onClick={() => {props.fetchNewTitles(7, 'CA')}}>
                What's New?
            </button>
    </Jumbotron>
)

export default Header;
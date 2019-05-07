import React from 'react';
import {Jumbotron} from 'react-bootstrap';

let Header = ({}) => (
    <Jumbotron>
        <h1>New Titles on Netflix Canada</h1>
        <p>Here are the latest additions for the past week.</p>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Change Display
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">List</a>
                <a class="dropdown-item" href="#">Details</a>
            </div>
        </div>
    </Jumbotron>
)

export default Header;
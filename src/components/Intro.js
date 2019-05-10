import React from 'react';
import {Jumbotron, Badge} from 'react-bootstrap';

let Intro = () => (
    <Jumbotron >
        {/* <h1 class="display-4">Welcome to <span style={{color:'red'}}>Netflix Navigator</span></h1> */}
        <h1 class="display-4">Welcome!</h1>
        <hr class="my-4"></hr>
        <h4><Badge variant="danger">To help you get started</Badge></h4>
        <hr class="my-4"></hr>
        <p><Badge variant="secondary">What's New</Badge></p>
        <p> Displays new content from the past week</p>
        <p><Badge variant="secondary">Advanced Search</Badge></p>
        <p> If you want to be more specific on your searches</p>  
        <p><Badge variant="secondary">Change View Dropdown</Badge></p> 
        <p>Switches the search results to Icon, Detail or List view</p>  
        <p><Badge variant="secondary">Quick Search</Badge></p>
        <p> Allows searching for titles, actors and even genre</p>         
    </Jumbotron>
)

export default Intro;
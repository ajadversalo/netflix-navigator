import React, { Component } from 'react';
import Context from '../contexts/NetflixContext'

{/* Renders image with synopsis in the table component*/}

class TitleDetail extends Component {
render () {
    //Removes extra characters from the synopsis field
    // let synopsis = this.props.title.synopsis;
    // let pos = synopsis.indexOf("<");
    // synopsis = synopsis.substr(0,pos);
    // synopsis = synopsis.replace('&#39;','');
    // synopsis = synopsis.replace('&rsquo;','');
    
    return (
        <Context.Consumer>
            {({sanitizeString}) => 
                <div class="media" style={{margin:'10px'}}>
                    <img class="align-self-start mr-3" src={this.props.title.image} alt={sanitizeString(this.props.title.title)} style={{margin: '5px' ,width: '120px'}}/>
                    <div class="media-body">
                        <h4 class="mt-0">{this.props.title.title}</h4>
                        <p><b>Synopsis: </b>{sanitizeString(this.props.title.synopsis)}</p>
                    </div>
                </div>}
        </Context.Consumer>
    )
};
}
export default TitleDetail;
import React, { Component } from 'react';

class TitleDetail extends Component {

render () {
    let synopsis = this.props.title.synopsis;
    let pos = synopsis.indexOf("<");
    synopsis = synopsis.substr(0,pos);
    synopsis = synopsis.replace('&#39;','');
    synopsis = synopsis.replace('&rsquo;','');
    
    return (
        <div class="media" style={{margin:'10px'}}>
            <img class="align-self-start mr-3" src={this.props.title.image} alt={this.props.title.title} style={{margin: '5px' ,width: '120px'}}/>
            <div class="media-body">
                <h4 class="mt-0">{this.props.title.title}</h4>
                <p><b>Synopsis:</b>{synopsis}</p>
            </div>
        </div>
    )
};
}
export default TitleDetail;
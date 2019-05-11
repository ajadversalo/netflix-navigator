import React, { Component } from 'react';


class TitleDetail extends Component {
    constructor(props) {
        super(props);
    }


render () {
    let synopsis = this.props.title.synopsis;
    let pos = synopsis.indexOf("<");
    synopsis = synopsis.substr(0,pos);
    synopsis = synopsis.replace('&#39;','');
    synopsis = synopsis.replace('&rsquo;','');
    
    return (
        <div class="media" style={{margin:'10px'}}>
            <img class="align-self-start mr-3" src={this.props.title.image} alt="Generic placeholder image" />
            <div class="media-body">
                <h4 class="mt-0">{this.props.title.title}</h4>
                <p>{synopsis}</p>
                <p><b>Runtime:</b> {this.props.title.runtime}</p>
                <p><b>Rating:</b> {this.props.title.rating}</p>
                <p><b>Release Date:</b> {this.props.title.released}</p>
            </div>
        </div>
    )
};

// const TitleDetail = (props) => {
//     return (  
//         <div class="media" style={{margin:'10px'}}>
//             <img class="align-self-start mr-3" src={props.title.image} alt="Generic placeholder image" />
//             <div class="media-body">
//                 <h5 class="mt-0">{props.title.title}</h5>
//                 <p>{props.title.synopsis}</p>
//                 <p>Runtime: {props.title.runtime}</p>
//                 <p>Rating: {props.title.rating}</p>
//             </div>
//         </div>
//     )
// }
}
export default TitleDetail;
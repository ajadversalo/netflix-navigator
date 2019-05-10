import React from 'react';

const TitleDetail = (props) => {
    return (  
        <div class="media" style={{margin:'10px'}}>
            <img class="align-self-start mr-3" src={props.title.image} alt="Generic placeholder image" />
            <div class="media-body">
                <h5 class="mt-0">{props.title.title}</h5>
                <p>{props.title.synopsis}</p>
                <p>Runtime: {props.title.runtime}</p>
                <p>Rating: {props.title.rating}</p>
            </div>
        </div>
    )
}

export default TitleDetail;
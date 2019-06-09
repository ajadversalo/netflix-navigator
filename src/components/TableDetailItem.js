import React from 'react';

{/* Renders image with synopsis in the table component */}
const TableDetailItem = (props) => {
    return (
        <div class="media" style={{margin:'10px'}}>
            <img class="align-self-start mr-3" src={props.title.image} alt={props.sanitizeString(props.title.title)} style={{margin: '5px' ,width: '120px'}}/>
            <div class="media-body">
                <h4 class="mt-0">{props.sanitizeString(props.title.title)} ({props.title.released})</h4>
                <p><b>Synopsis: </b>{props.sanitizeString(props.title.synopsis)}</p>
                <span class="badge badge-warning badge-pill">IMDB Score: {props.title.rating}</span>
            </div>
        </div>
    )
}
export default TableDetailItem;
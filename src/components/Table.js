import React from 'react';
import {Container} from 'react-bootstrap';
import TitleDetail from './TitleDetail.js'

const Table = (props) => {
    return (
        <Container>
            { 
                props.view === 'icon' &&
                <div className="d-flex justify-content-center" style={{ flexWrap: 'wrap'}}>
                    {props.titles.map(title => <a href=""><img src={title.image} style={{margin: '5px' ,width: '120px'}}/></a> )}
                </div>    
            } 
            
            {
                props.view === 'detail' &&
                <div >
                    {props.titles.map(title => <TitleDetail title={title}/>)}
                </div>
            }

            {
                props.view === 'list' &&
                <div >
                    <ul class="list-group">
                        {props.titles.map(title => 
                            <li class="list-group-item d-flex justify-content-between align-items-center"> {title.title} 
                            <span class="badge badge-warning badge-pill">{title.rating}</span></li>)}
                    </ul>
                </div>
            }
        </Container>
    )
}

export default Table;
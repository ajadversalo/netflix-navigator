import React from 'react';
import {Container} from 'react-bootstrap';
import TitleDetail from './TitleDetail.js'

const Table = (props) => {
    return (
       
            <div>
            { 
                props.titles.length === 0 && 
                <div class="alert alert-danger" role="alert">
                    Search entry returned no results.
                </div>
            }

            {/* Icon View */}
            { 
                props.view === 'icon' &&
                <div className="d-flex justify-content-center" style={{ flexWrap: 'wrap'}}>
                    {props.titles.map(title => <a href="#" onClick={()=>{props.fetchTitleDetail(title.netflixid)}}><img src={title.image} style={{margin: '5px' ,width: '120px'}}/></a> )}
                </div>    
            } 

            {/* Detail View */}
            {
                props.view === 'detail' &&
                <div >
                    {props.titles.map(title => <TitleDetail title={title}/>)}
                </div>
            }

            {/* List View */}
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
            </div>
        
       
    )
}

export default Table;
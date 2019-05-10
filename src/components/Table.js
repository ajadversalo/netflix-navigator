import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';
import TitleDetail from './TitleDetail.js'

/*This component displays a table with three different formats(Icon, Detail and List) depending on the view property received*/

const Table = (props) => {
    return (     
            <div>
            {       
                props.titles.length === 0 && 
                <div class="alert alert-danger" role="alert">
                    Search entry returned no results.
                </div>
            }

            <div className="d-flex justify-content-center" style={{marginBottom:"10px"}}>
                <ButtonGroup size="sm" className="mt-4">
                    <Button variant="danger" onClick={() => {props.changeView('icon')}}>Icon</Button>
                    <Button variant="danger" onClick={() => {props.changeView('detail')}}>Detail</Button>
                    <Button variant="danger" onClick={() => {props.changeView('list')}}>List</Button>
                </ButtonGroup>
            </div>

            {/* Icon View */}
            { 
                props.view === 'icon' &&
                <div className="d-flex justify-content-center" style={{ flexWrap: 'wrap'}}>
                    {props.titles.map(title => <a href="#" onClick={()=>{props.fetchTitleDetail(title.netflixid)}}><img src={title.image} alt={title.title} style={{margin: '5px' ,width: '120px'}}/></a> )}
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
                            <li class="list-group-item d-flex justify-content-between align-items-center"> 
                            {title.title}<span class="badge badge-warning badge-pill">{title.rating}</span></li>)
                        }
                    </ul>
                </div>
            }
            </div>     
    )
}

export default Table;
import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';
import TitleDetail from './TitleDetail.js'
import Context from '../contexts/NetflixContext'

/*This component displays a table with three different formats(Icon, Detail and List) depending on the view property received*/

const Table = (props) => {
    return (     
            <Context.Consumer>
            {({state, changeView, fetchTitleDetail}) => 
            <div>
            {/* TO DO: tie button clicked to view state */}
            { state.titles.length > 0 &&
            <div className="d-flex justify-content-center" style={{marginBottom:"10px"}}>
                <ButtonGroup size="sm" className="mt-4">
                    <Button variant="danger" onClick={() => {changeView('icon')}}>Icon</Button>
                    <Button variant="danger" onClick={() => {changeView('detail')}}>Detail</Button>
                    <Button variant="danger" onClick={() => {changeView('list')}}>List</Button>
                </ButtonGroup>
            </div>
            }

            {/* Icon View */}
            { 
                state.view === 'icon' &&
                <div className="d-flex justify-content-center" style={{ flexWrap: 'wrap'}}>
                    {state.titles.map(title => <a href="#" onClick={()=>{fetchTitleDetail(title.netflixid)}}><img src={title.image} alt={title.title} style={{margin: '5px' ,width: '120px'}}/></a> )}
                </div>    
            } 

            {/* Detail View */}
            {
                state.view === 'detail' &&
                <div >
                    {state.titles.map(title => <TitleDetail title={title}/>)}
                </div>
            }

            {/* List View */}
            {
                state.view === 'list' &&
                <div >
                    <ul class="list-group">
                        {state.titles.map(title => 
                            <li class="list-group-item d-flex justify-content-between align-items-center"> 
                            {title.title}<span class="badge badge-warning badge-pill">{title.rating}</span></li>)
                        }
                    </ul>
                </div>
            }
            </div>}
            </Context.Consumer>     
    )
}

export default Table;
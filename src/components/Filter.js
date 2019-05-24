import React, { useEffect } from 'react';
import Table from '../components/Table.js'
import Context from '../contexts/NetflixContext'
import Genres from '../data/genres';
import * as Constants from '../data/constants';
import {Form, Button, Col} from 'react-bootstrap';

let Filter = () => {
return (
    <Context.Consumer>{({state, fetchTitles, handleChange}) =>
    <div >
        <div style={{display:'flex', justifyContent:'space-between'}}>
        <h2><span className="badge badge-dark">Filter Page</span></h2>
        <Form inline>
            {/* <Form.Label>Genre: </Form.Label> */}
            <Form.Control as="select" name="genreID" onChange={handleChange} >
                {Genres.map(genre => <option value={genre.id}>{genre.title}</option>)}
            </Form.Control>
            <Button onClick={() => {fetchTitles('', 
                        Constants.EARLIEST_PRODUCTION_YEAR,
                        state.currentYear, 
                        Constants.ALL_TYPES, 
                        state.genreID, 
                        Constants.IMDB_MINIMUM_SCORE,  
                        Constants.IMDB_MAXIMUM_SCORE)}}
                        style={{marginLeft:'10px'}}
                        >Apply</Button>
            </Form>
            {/* <select onChange={alert('test')}>
                {Genres.map(genre => 
                    <option  
                        onClick={() => {fetchTitles('', 
                        Constants.EARLIEST_PRODUCTION_YEAR,
                        state.currentYear, 
                        Constants.ALL_TYPES, 
                        genre.id, 
                        Constants.IMDB_MINIMUM_SCORE,  
                        Constants.IMDB_MAXIMUM_SCORE)}}>
                        {genre.title}
                    </option>)}
            </select> */}
        </div>
        { state.allTitles && 
        <Table />}
    </div>}
    </Context.Consumer>)
}

export default Filter;
import React from 'react';
import {Badge, Row, Col} from 'react-bootstrap';
import FullDetail from '../components/FullDetailPage.js'
import Context from '../contexts/NetflixContext'

let Detail = () => {
return (
    <Context.Consumer>{({state}) =>
        <div>
            <h1>Detail Page</h1>
            { state.titleDetail && 
            <FullDetail />}
        </div>}
    </Context.Consumer>)
}

export default Detail;
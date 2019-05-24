import React from 'react';
import {Badge, Row, Col} from 'react-bootstrap';
import FullDetail from '../components/FullDetailPage.js'
import Context from '../contexts/NetflixContext'

let LuckyPick = () => {
return (
    <Context.Consumer>{({state}) =>
        <div>
            <h2><span className="badge badge-dark">Lucky Pick</span></h2>
            { state.titleDetail && 
            <FullDetail />}
        </div>}
    </Context.Consumer>)
}

export default LuckyPick;
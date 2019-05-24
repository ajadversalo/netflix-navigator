import React, { useEffect } from 'react';
import Table from '../components/Table.js'
import Context from '../contexts/NetflixContext'

let New = () => {
return (
    <Context.Consumer>{({state}) =>
    <div>
        <h2><span className="badge badge-dark">{state.count} new titles this week</span></h2>
        { state.allTitles &&
        <Table />}
    </div>}
    </Context.Consumer>)
}

export default New;
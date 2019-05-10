import React from 'react';
import Table from './Table.js';
import AdvancedSearch from './AdvancedSearch';

const SearchPage = (props) => {
    return (  
        <div>
            {/* <AdvancedSearch 
                fetchTitles = {props.fetchTitles} 
                handleChange = {props.handleChange}
                startYear = {props.startYear}
                endYear = {props.endYear}
                type = {props.type}
            />             */}
            <Table 
                titles = {props.titles} 
                view = {props.view}
                fetchTitleDetail = {props.fetchTitleDetail}
                changeView = {props.changeView}
            />
        </div>
    )
}

export default SearchPage;
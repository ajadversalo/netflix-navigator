import React from 'react';
import Table from './Table.js';

const WhatsNewPage = (props) => {
    return (  
        <div>
            <div class="alert alert-success" role="alert">
                New content for the past 7 days
            </div>
            <Table 
                titles={props.titles} 
                view={props.view}
                fetchTitleDetail={props.fetchTitleDetail}
            />              
        </div>
    )
}

export default WhatsNewPage;



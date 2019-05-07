import React from 'react';

const TableIcon = (props) => {
    return (
        <div>
            {props.titles.map(title => <a href=""><img src={title.image}/></a> )}
        </div>
    )
}

export default TableIcon;
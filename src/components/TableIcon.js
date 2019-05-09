import React from 'react';
import {Container} from 'react-bootstrap';
const TableIcon = (props) => {
    return (
        <Container>
            {props.titles.map(title => <a href=""><img src={title.image}/></a> )}
            </Container>
    )
}

export default TableIcon;
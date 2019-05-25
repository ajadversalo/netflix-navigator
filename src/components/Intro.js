import React from 'react';
import Context from '../contexts/NetflixContext'
import {Jumbotron, Badge, Row, Col} from 'react-bootstrap';
import AdvancedSearch from '../components/AdvancedSearch';
import {connect} from 'react-redux';


{/* Intro page containing a list of the new episodes and the advanced search form*/}
let Intro = (props) => (
    <Jumbotron >
        <Context.Consumer>
            {({state}) =>   
        <Row>
            <Col>
                <h1 className="d-flex justify-content-start">Welcome!</h1>
                <hr class="my-4"></hr>
                <h5><Badge variant="danger">NEW EPISODES</Badge></h5>
                <div>
                    {props.episodes.map(title => <li>{title.title}</li>)}
                </div>
            </Col>
            <Col>
                <h5><Badge variant="danger">DETAILED SEARCH</Badge></h5>   
                <AdvancedSearch></AdvancedSearch>
            </Col>
        </Row>}
        </Context.Consumer>
    </Jumbotron>
)

const mapStateToProps = (state) => {
    console.log('mapStateToProps', state);
    return {
        episodes: state.episodes
    }
}


const mapDispatchToProps = (dispatch) => {
    // console.log('mapDispatchToProps', dispatch);
    // return {
    //     onClearAllTitles: () => {
    //         const action = {type: 'SET_ALLTITLES', val: []}
    //         dispatch(action);
    //     },

    //      fetchNewTitles: () => {
    //         dispatch(actionCreator.fetchNewTitles())  
    //     }
    // }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intro);

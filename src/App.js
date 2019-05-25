/**
 * Netflix Navigator
 * https://github.com/ajadversalo/netflix-navigator
 *
 */

import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import Context from '../src/contexts/NetflixContext';
import ContextProvider from './provider/ContextProvider';
import NavBar from '../src/components/NavBar';
import FullDetailPage from '../src/components/FullDetailPage';
import Table from '../src/components/Table.js';
import Store from './store/Store';
import {connect} from 'react-redux';
import * as actionCreator from '../src/actions/actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.setCurrentYear();
    this.props.fetchNewEpisodes();
  }

sanitizeString = (string) => {
  let sanitizedString = string;
  //remove html tags at the end of string
  if(sanitizedString.includes("<")) {
    let pos = sanitizedString.indexOf("<"); 
    sanitizedString = sanitizedString.substr(0,pos);
  }
  sanitizedString = sanitizedString.split("&amp;#39;").join("'");
  sanitizedString = sanitizedString.split("&#39;").join("'");
  sanitizedString = sanitizedString.split("&rsquo;").join("'");
  return sanitizedString;
}

render(){
    return (
      <ContextProvider>
        <Container>
          <NavBar store={Store}/>
          {console.log('store: ', Store)}
            {/* <Context.Consumer> */}
              {/* Display the item's full detail page only when titleDetail has a value */}
              {/* {({state}) => state.titleDetail &&  <FullDetailPage/>} */}
              {this.props.titleDetail &&  <FullDetailPage store={Store} sanitizeString={this.sanitizeString}/>}
              {/* </Context.Consumer> */}
          <Table 
            store={Store}
            sanitizeString={this.sanitizeString}
          />
        </Container>
      </ContextProvider>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
      titleDetail: state.titleDetail,
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('mapDispatchToProps', dispatch);
  return {
      fetchNewEpisodes: () => {
        dispatch(actionCreator.fetchNewEpisodes());
      },
      setCurrentYear: () => {
        dispatch(actionCreator.setCurrentYear())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

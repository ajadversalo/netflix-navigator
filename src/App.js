/**
 * Netflix Navigator
 * https://github.com/ajadversalo/netflix-navigator
 *
 */

import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import NavBar from '../src/components/NavBar';
import FullDetailPage from '../src/components/FullDetailPage';
import Table from '../src/components/Table.js';
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
  sanitizedString = sanitizedString.split("&amp;#39;").join("'");
  sanitizedString = sanitizedString.split("&#39;").join("'");
  sanitizedString = sanitizedString.split("&rsquo;").join("'");
  if (sanitizedString.includes("<")) {
    let pos = sanitizedString.indexOf("<"); 
    sanitizedString = sanitizedString.substr(0,pos);
  }
  return sanitizedString;
}

render(){
  return (
    <Container>
      <NavBar />
      { this.props.titleDetail &&  
        <FullDetailPage sanitizeString={this.sanitizeString}/>
      }
      <Table sanitizeString={this.sanitizeString}/>      
    </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      titleDetail: state.titleDetail,
  }
}

const mapDispatchToProps = (dispatch) => {
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

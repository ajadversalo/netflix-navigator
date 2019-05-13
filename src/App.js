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


class App extends Component {
  render(){
    return (
      <ContextProvider>
        <Container>
          <NavBar/>
            <Context.Consumer>
              {/* Display the item's full detail page only when titleDetail has a value */}
              {({state}) => state.titleDetail &&  <FullDetailPage/>}
              </Context.Consumer>
          <Table/>
        </Container>
      </ContextProvider>
    );
  }
}
export default App;

import React, { Component } from 'react';
import NavBar from '../src/components/NavBar';
import FullDetailPage from '../src/components/FullDetailPage';
import {Container} from 'react-bootstrap';
import Table from '../src/components/Table.js';
import Context from '../src/contexts/NetflixContext';
import ContextProvider from './provider/ContextProvider';

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <ContextProvider>
        <Container>
          <NavBar/>
            <Context.Consumer>
              {({state}) => state.titleDetail &&  <FullDetailPage/>}
              </Context.Consumer>
          <Table/>
        </Container>
      </ContextProvider>
    );
  }
}
export default App;

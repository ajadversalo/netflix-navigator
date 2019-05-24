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
import Home from '../src/components/Home';
import Search from '../src/components/AdvancedSearch';
import New from '../src/components/New';
import LuckyPick from '../src/components/LuckyPick';
import Detail from '../src/components/Detail';
import Filter from '../src/components/Filter';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

class App extends Component {
  render(){
    return (
      <Router>
      <ContextProvider>
        <Container>
          <NavBar/>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/new" component={New}/>
              <Route path="/table" component={Table}/>
              <Route path="/search" component={Search}/>
              <Route path="/luckypick" component={LuckyPick}/>
              <Route path="/detail" component={Detail}/>
              <Route path="/filters" component={Filter}/>
              <Context.Consumer>
                {/* Display the item's full detail page only when titleDetail has a value */}
                {({state}) => state.titleDetail &&  <FullDetailPage/>}
                </Context.Consumer>
              
            </Switch>
        </Container>
      </ContextProvider>
      </Router>
    );
  }
}
export default App;

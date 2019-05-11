import React, { Component } from 'react';
import TitleAPI from '../src/api/TitleAPI';
import NavBar from '../src/components/NavBar';
import FullDetailPage from '../src/components/FullDetailPage';
import {Container} from 'react-bootstrap';
import Table from '../src/components/Table.js';
import Context from '../src/contexts/NetflixContext';
import ContextProvider from './provider/ContextProvider';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // titles:  [],
      // days: 7,
      // country: 'CA',//remove
      // netflixid: null,//remove
      // titleDetail : [],
      // title: null,
      // startYear: 1900, 
      // endYear: 2019,
      // earliestYear: 1900,
      // currentYear:null,
      // //currentScreen:'homePage',
      // view: 'icon',
      // searchString: null,
      // type:'movie',
      // genreID: null,
      // status:null

    };
  }

componentDidMount = () => {
  this.setCurrentYear();
}

//remove country for now
fetchNewTitles = (days, country) => {
  TitleAPI.getNewTitles(days, country, (data) => {
    let stateCopy = {...this.state};
    stateCopy.titles = data;
    this.setState(stateCopy);
  })
}

fetchTitles = (searchString, startYear, endYear, type, genreID) => {
  TitleAPI.getTitles(searchString, startYear, endYear, type, genreID, (data) => {
    let stateCopy = {...this.state};
    stateCopy.titles = data;
    this.setState(stateCopy);
  }) 
}

//Calculates current year and sets to state
setCurrentYear = () => {
  let currentYear = new Date();
  let stateCopy = {...this.state};
  stateCopy.currentYear = currentYear.getFullYear();
  this.setState(stateCopy);
}

//rename to renderScreen
switchScreen = (screen) => {
    let stateCopy = {...this.state};
    stateCopy.currentScreen = screen;
    this.setState(stateCopy);
}

render(){
  return (
    <ContextProvider>
      <Container>
        <NavBar/>
        <Context.Consumer>{({state}) => 
          <span class="badge badge-danger">Query returned {state.titles.length} results</span>}
        </Context.Consumer>
        <Table/>
      </Container>
    </ContextProvider>
  );
}
}
export default App;

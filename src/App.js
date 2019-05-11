import React, { Component } from 'react';
import TitleAPI from '../src/api/TitleAPI';
import NavBar from '../src/components/NavBar';
import FullDetailPage from '../src/components/FullDetailPage';
import {Container} from 'react-bootstrap';
import Table from '../src/components/Table.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      titles:  [],
      days: 7,
      country: 'CA',//remove
      netflixid: null,//remove
      titleDetail : [],
      title: null,
      startYear: 1900, 
      endYear: 2019,
      earliestYear: 1900,
      currentYear:'',
      currentScreen:'homePage',
      view: 'icon',
      searchString: '',
      type:'movie',
      genreID: '',
      status:''

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
  console.log(searchString);  
}
//rename to something
fetchTitleDetail = (id) => {
  TitleAPI.getTitleDetail(id, (data) => {
    let stateCopy = {...this.state};
    stateCopy.titleDetail = data;
    this.setState(stateCopy);
  })
}

handleChange = (event) => {
  this.setState({[event.target.name]: event.target.value});
}

setCurrentYear = () => {
  let currentYear = new Date();
  let stateCopy = {...this.state};
  stateCopy.currentYear = currentYear.getFullYear();
  this.setState(stateCopy);
}

changeView = (view) => {
  let stateCopy = {...this.state};
  stateCopy.view = view;
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
    <div>
      <Container>
        <NavBar 
          fetchTitles    = {this.fetchTitles}
          fetchNewTitles = {this.fetchNewTitles}
          startYear        = {this.state.startYear} 
          endYear        = {this.state.endYear} 
          switchScreen   = {this.switchScreen}
          changeView     = {this.changeView}
          handleQuickSearchTextChange = {this.handleQuickSearchTextChange}
          handleChange = {this.handleChange}
          searchString = {this.state.searchString}
          submitQuickSearch = {this.submitQuickSearch}
          fetchTitles = {this.fetchTitles}
          type = {this.state.type}
          view={this.state.view}
        />

        <span class="badge badge-danger">Query returned {this.state.titles.length} results</span>

        {/* --- Full Detail Screen --- */}
        {
          this.state.currentScreen === 'full' && <FullDetailPage titleDetail={this.state.titleDetail}/>         
        }

        <Table 
          titles={this.state.titles} 
          view={this.state.view}
          fetchTitleDetail={this.fetchTitleDetail}
          changeView     = {this.changeView}
          />
      </Container>
    </div>
  );
}
}
export default App;

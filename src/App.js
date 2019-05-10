import React, { Component } from 'react';
import './App.css';
import TitleAPI from '../src/api/TitleAPI';
import NavBar from '../src/components/NavBar';
import HomePage from '../src/components/HomePage';
import FullDetailPage from '../src/components/FullDetailPage';
import NewPage from '../src/components/NewPage';
import SearchPage from '../src/components/SearchPage.js';
import Footer from '../src/components/Footer.js'; //remove for now
import {Container, Row, Col, Jumbotron} from 'react-bootstrap';
import Table from '../src/components/Table.js';
import FormTest from '../src/components/FormTest.js';


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
      currentScreen:'homePage',
      view: 'icon',
      searchString: '',
      type:'movie',
      genreID: ''

    };
  }
//remove country for now
fetchNewTitles = (days, country) => {
  TitleAPI.getNewTitles(days, country, (data) => {
    let stateCopy = {...this.state};
    stateCopy.titles = data;
    this.setState(stateCopy);
  })
}

fetchTitles = (title, startYear, endYear, type, genreID) => {
  TitleAPI.getTitles(title, startYear, endYear, type, genreID, (data) => {
    let stateCopy = {...this.state};
    stateCopy.titles = data;
    this.setState(stateCopy);
  })
  console.log(title);  
}
//rename to something
fetchTitleDetail = (id) => {
  TitleAPI.getTitleDetail(id, (data) => {
    let stateCopy = {...this.state};
    stateCopy.titleDetail = data;
    //this has to be removed
    stateCopy.currentScreen = "full";
    this.setState(stateCopy);
  })
}

handleChange = (event) => {
  this.setState({[event.target.name]: event.target.value});
}

handleQuickSearchTextChange = (event) => {
  this.setState({searchString: event.target.value});
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

submitQuickSearch = () => {
  this.fetchTitles(this.state.searchString, this.state.startYear, this.state.endYear, "Any", "Any")
  this.switchScreen("quickSearch");
}

render(){
  return (
    <div>
      <Container>
        {/* --- Navigation --- */}
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

        {/* --- Home Screen --- */}
        { this.state.currentScreen ==='homePage' && <HomePage/> }

        {/* --- Advanced Search Screen --- */}
        { this.state.currentScreen === 'advanced' && 
          <SearchPage
            titles = {this.state.titles}
            fetchTitles = {this.fetchTitles}
            handleChange = {this.handleChange}
            startYear = {this.state.startYear}
            endYear = {this.state.endYear}
            changeView     = {this.changeView}
            type = {this.state.type}
            view={this.state.view}
          />
        }
        
        {/* --- What's New Screen --- */}
        {
          this.state.currentScreen === 'new' && 
            <NewPage 
              titles={this.state.titles} 
              view={this.state.view}
              fetchTitleDetail={this.fetchTitleDetail}
              changeView     = {this.changeView}
            />        
        }

        {/* --- Full Detail Screen --- */}
        {
          this.state.currentScreen === 'full' && <FullDetailPage titleDetail={this.state.titleDetail}/>         
        }

        {/* --- Quick Search Screen --- */}
        { this.state.currentScreen === 'quickSearch' && <div>
        <Table 
          titles={this.state.titles} 
          view={this.state.view}
          fetchTitleDetail={this.fetchTitleDetail}
          />
        </div> }
      </Container>
    </div>
  );
}
}
export default App;

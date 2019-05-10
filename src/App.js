import React, { Component } from 'react';
import './App.css';
import TitleAPI from '../src/api/TitleAPI';
import NavBar from '../src/components/NavBar';
import HomePage from '../src/components/HomePage';
import FullDetailPage from '../src/components/FullDetailPage';
import WhatsNewPage from '../src/components/WhatsNewPage';
import AdvancedSearch from '../src/components/AdvancedSearch.js';
import Footer from '../src/components/Footer.js'; //remove for now
import {Container, Row, Col, Jumbotron} from 'react-bootstrap';
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
      //advancedSearch:false,
      currentScreen:'homePage',
      view: 'icon',
      searchString: ''

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
    // stateCopy.titles = [];
    this.setState(stateCopy);
}


submitQuickSearch = () => {
  //let currentDate = new Date();
  //const startYear = 1900;
  //let endYear = currentDate.getFullYear();
  
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
          //toggleSearch   = {this.toggleSearch}
          startYear        = {this.state.startYear} 
          endYear        = {this.state.endYear} 
          switchScreen   = {this.switchScreen}
          changeView     = {this.changeView}
          handleQuickSearchTextChange = {this.handleQuickSearchTextChange}
          handleChange = {this.handleChange}
          searchString = {this.state.searchString}
          submitQuickSearch = {this.submitQuickSearch} 
        />

        {/* --- Home Screen --- */}
        { this.state.currentScreen ==='homePage' && <HomePage/> }

        {/* --- Advanced Search Screen --- */}
        { this.state.currentScreen === 'advanced' && <AdvancedSearch fetchTitles = {this.fetchTitles} /> } 
        
        {/* --- What's New Screen --- */}
        {
          this.state.currentScreen === 'new' && 
            <WhatsNewPage 
              titles={this.state.titles} 
              view={this.state.view}
              fetchTitleDetail={this.fetchTitleDetail}
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
          
        {/*Will render on all screens  */}
        {/* <Table 
          titles={this.state.titles} 
          view={this.state.view}
          fetchTitleDetail={this.fetchTitleDetail}
          /> */}
      </Container>
    </div>
  );
}
}
export default App;

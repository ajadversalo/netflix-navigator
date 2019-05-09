import React, { Component } from 'react';
import './App.css';
import TitleAPI from '../src/api/TitleAPI';
import NavBar from '../src/components/NavBar';
import Header from '../src/components/Header';
import Table from '../src/components/Table.js';
import AdvancedSearch from '../src/components/AdvancedSearch.js';
import {Container, Row, Col, Jumbotron} from 'react-bootstrap';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      titles:  [],
      days: 7,
      country: 'CA',
      netflixid: null,
      titleDetail : null,
      title: null,
      startYear:null,
      endYear:null,
      advancedSearch:false,
      currentScreen:'home',
      view: 'icon'

    };
  }

componentDidMount = () => {
  console.log('component did mount');
}

fetchNewTitles = (days, country) => {
  TitleAPI.getNewTitles(days, country, (data) => {
    let stateCopy = {...this.state};
    stateCopy.titles = data;
    this.setState(stateCopy);
  })
  this.switchScreen('new');
}

toggleSearch = () => {
  let stateCopy = {...this.state};
  stateCopy.advancedSearch = !stateCopy.advancedSearch;
  this.setState(stateCopy);
}

fetchTitles = (title, startYear, endYear, type, genreID) => {
  TitleAPI.getTitles(title, startYear, endYear, type, genreID, (data) => {
    let stateCopy = {...this.state};
    stateCopy.titles = data;
    this.setState(stateCopy);
  })
  console.log(title);
  
}


fetchTitleDetail = () => {
  TitleAPI.getTitleDetail(this.state.netflixid, (data) => {
    let stateCopy = {...this.state};
    stateCopy.titleDetail = data;
    this.setState(stateCopy);
  })
}

changeView = (view) => {
  let stateCopy = {...this.state};
  stateCopy.view = view;
  this.setState(stateCopy);
}

switchScreen = (screen) => {
    let stateCopy = {...this.state};
    stateCopy.currentScreen = screen;
    stateCopy.titles = [];
    this.setState(stateCopy);
}

render(){
  if(this.state.titles.length > 0){
    console.log(this.state.titles)
  }

  
  //console.log(currentDate);
  return (
    <div>

      <Container>
      <NavBar 
        fetchTitles = {this.fetchTitles}
        fetchNewTitles = {this.fetchNewTitles}
        toggleSearch = {this.toggleSearch}
        endYear = {this.state.endYear} 
        switchScreen = {this.switchScreen}
        changeView = {this.changeView} 
      />

      {
        this.state.currentScreen ==='home' &&
        <Header></Header>
      }

      {/* <Header 
        fetchNewTitles = {this.fetchNewTitles}
      /> */}
      
      { this.state.currentScreen === 'advanced' &&
        <Container >
          <Row>
            <Col></Col>
        <Col>
        <AdvancedSearch 
        fetchTitles = {this.fetchTitles}
        />
        </Col>
        <Col>
        </Col>
        </Row>
        </Container>
      } 
      {
        this.state.currentScreen === 'new' &&
         <div style={{aligSelf:'center', justifyContent: 'center'}}>
          
        <Jumbotron fluid>
              <Container fluid>
              <p className="lead">New content from May 01 to </p>
              </Container>
            </Jumbotron>
          
          {/* <TableIcon titles={this.state.titles}/>    */}
        </div>
      }        
        <Table
          titles={this.state.titles}
          view={this.state.view}
        />
        </Container>
    </div>
  );
}
}
export default App;

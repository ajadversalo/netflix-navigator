import React, { Component } from 'react';
import './App.css';
import TitleAPI from '../src/api/TitleAPI';
import NavBar from '../src/components/NavBar';
import Header from '../src/components/Header';
import {Navbar, Nav, NavDropdown, Button, Form, FormControl, Jumbotron} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      titles:  [],
      days: 7,
      country: 'CA',
      netflixid: 60029591,
      titleDetail : null
    };
  }

componentDidMount = () => {
  this.fetchTitles();
 // this.fetchTitleDetail();
}

fetchTitles = () => {
  TitleAPI.getNew(this.state.days, this.state.country, (data) => {
    let stateCopy = {...this.state};
    stateCopy.titles = data;
    this.setState(stateCopy);
  })
}

fetchTitleDetail = () => {
  TitleAPI.getTitleDetail(this.state.netflixid, (data) => {
    let stateCopy = {...this.state};
    stateCopy.titleDetail = data;
    this.setState(stateCopy);
  })
}

render(){
  if(this.state.titles.length > 0){
    console.log(this.state.titles)
    
  }
  
  if(this.state.titleDetail !== null){
    console.log(this.state.titleDetail.imdbinfo.plot);
  }

  return (
    <div className="App">
      <NavBar />
      <Header />
      {this.state.titles.map(title => <a href=""><img src={title.image}/></a> )}
    </div>
  );
}
}
export default App;

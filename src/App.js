import React, { Component } from 'react';
import './App.css';
import TitleAPI from '../src/api/TitleAPI';
import NavBar from '../src/components/NavBar';
import Header from '../src/components/Header';
import TableIcon from '../src/components/TableIcon.js';
import AdvancedSearch from '../src/components/AdvancedSearch.js';

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
  //alert(days + " " + country);
}

// fetchTitles = (countryCode, title, startYear, endYear) => {
//   TitleAPI.getTitles(countryCode, title, startYear, endYear, (data) => {
//     let stateCopy = {...this.state};
//     stateCopy.titles = data;
//     this.setState(stateCopy);
//   })
//   console.log(title);
// }

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

render(){
  if(this.state.titles.length > 0){
    console.log(this.state.titles)
  }
  
  return (
    <div className="App">
      <NavBar 
        fetchTitles = {this.fetchTitles}
      />
      {/* <Header 
        fetchNewTitles = {this.fetchNewTitles}
      /> */}
      <AdvancedSearch
      fetchTitles = {this.fetchTitles}
      ></AdvancedSearch>
      { this.state.titles &&
        <TableIcon titles={this.state.titles}/>
      }
    </div>
  );
}
}
export default App;

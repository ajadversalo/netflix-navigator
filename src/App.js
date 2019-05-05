import React, { Component } from 'react';
import './App.css';
import TitleAPI from '../src/api/TitleAPI';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      titles:  [],
      days: 7,
      country: 'CA'
    };
  }

componentDidMount = () => {
  this.fetchTitles();
}

fetchTitles = () => {
  TitleAPI.getNew(this.state.days, this.state.country, (data) => {
    let stateCopy = {...this.state};
    stateCopy.titles = data;
    this.setState(stateCopy);
  })
}

render(){
  if(this.state.titles.length > 0){
    console.log(this.state.titles)
  }
  return (
    <div className="App">
    
      {this.state.titles.map(title => <a href=""><img src={title.image}/></a> )}
    
    </div>
  );
}
}
export default App;

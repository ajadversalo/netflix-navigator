import React, {Component} from 'react';
import Context from '../contexts/NetflixContext';
import NetflixAPI from '../api/NetflixAPI';

class ContextProvider extends Component {
    constructor(){
        super()
        this.state = {
          allTitles:  [],
          count: 0,
          episodes: [],
          titleDetail : null,
          startYear: 1900, 
          endYear: 2019,
          currentYear: null,
          view: 'icon',
          searchString: null,
          type: 'movie',
          genreID: null,     
          imdbMin: 0,
          imdbMax: 10
        }
    }

//Set current year and populate intro page
componentDidMount = () => {
    this.setCurrentYear();
    this.fetchNewEpisodes();
}
      
//General input handling
handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
}

//Calculates for the current year
setCurrentYear = () => {
  let currentYear = new Date();
  let stateCopy = {...this.state};
  stateCopy.currentYear = currentYear.getFullYear();
  this.setState(stateCopy);
}


fetchTitles = (searchString, startYear, endYear, type, genreID, imdbMin, imdbMax) => {
  NetflixAPI.getTitles(searchString, startYear, endYear, type, genreID, imdbMin, imdbMax, (data) => {
    let stateCopy = {...this.state};
    stateCopy.allTitles = data.ITEMS;
    stateCopy.count = data.COUNT;
    this.setState(stateCopy);
  }) 
}

//Sets table view to Icon, Detail or List
changeView = (view) => {
  let stateCopy = {...this.state};
  stateCopy.view = view;
  this.setState(stateCopy);
}

//Get complete details of a title using netflixid as input
fetchTitleDetail = (id) => {
  NetflixAPI.getTitleDetail(id, (data) => {
    let stateCopy = {...this.state};
    stateCopy.titleDetail = data;
    this.setState(stateCopy);
  })
}

//Get new content from the past 7 days
fetchNewTitles = () => {
  NetflixAPI.getNewTitles((data) => {
    let stateCopy = {...this.state};
    stateCopy.allTitles = data.ITEMS;
    stateCopy.count = data.COUNT;
    this.setState(stateCopy);
  })
}

//Get new series episodes from the past 24 hours
fetchNewEpisodes = () => {
  NetflixAPI.getNewEpisodes((data) => {
    let stateCopy = {...this.state};
    stateCopy.episodes = data.results;
    this.setState(stateCopy);
  })
}

//Removes all titles
clearTitles = () => {
  let stateCopy = {...this.state};
  stateCopy.allTitles = [];
  this.setState(stateCopy);
}

//Removes selected title details
clearTitle = () => {
  let stateCopy = {...this.state};
  stateCopy.titleDetail = '';
  this.setState(stateCopy);
}

//Removes all titles and selected title details, used when going to the home page
clearAllTitles = () => {
  let stateCopy = {...this.state};
  stateCopy.allTitles = [];
  stateCopy.titleDetail = '';
  this.setState(stateCopy);
}

render(){
    return(
        <Context.Provider value={{
            state: this.state, 
            handleChange: this.handleChange,
            fetchTitles: this.fetchTitles,
            changeView: this.changeView,
            fetchTitleDetail: this.fetchTitleDetail,
            fetchNewTitles: this.fetchNewTitles,
            clearTitles: this.clearTitles,
            clearAllTitles: this.clearAllTitles,
            clearTitle: this.clearTitle
            }}>
        {this.props.children}
        </Context.Provider>
    );
}
}

export default ContextProvider;

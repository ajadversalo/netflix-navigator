import React, {Component} from 'react';
import Context from '../contexts/NetflixContext';
import NetflixAPI from '../api/NetflixAPI';
import * as Constants from '../data/constants';

{/* This ContextProvider class contains all the App's state variables and functions */}

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
          imdbMax: 10,
          luckyPickItems: []
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
    stateCopy.titleDetail = null;
    this.setState(stateCopy);
  }) 
}

//Get a list of all content with ratings ranging from 8-10. The list will be used for picking a random title
pickRandomTitle = () => {
  NetflixAPI.getTitles('', 
    Constants.EARLIEST_PRODUCTION_YEAR, 
    this.state.currentYear, 
    Constants.ALL_TYPES,
    Constants.ALL_GENRES, 
    Constants.IMDB_LP_MIN, 
    Constants.IMDB_LP_MAX, 
    (data) => {
      let stateCopy = {...this.state};
      stateCopy.luckyPickItems = data.ITEMS;
      stateCopy.luckyPickItemCount = data.COUNT;
      this.setState(stateCopy, () => {this.displayRandomTitle()});
  }) 
}

displayRandomTitle = () => {
  let luckyPickIndex = 0;
  //Get random number from 1 to number of items in the lucky pick storage
  luckyPickIndex = Math.floor(Math.random() * this.state.luckyPickItems.length);

  if(luckyPickIndex > 0){
    this.fetchTitleDetail(this.state.luckyPickItems[luckyPickIndex].netflixid);
  }
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
    stateCopy.titleDetail = null;
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
            clearTitle: this.clearTitle,
            pickRandomTitle: this.pickRandomTitle
            }}>
        {this.props.children}
        </Context.Provider>
    );
}
}

export default ContextProvider;
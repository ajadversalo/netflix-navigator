import React, {Component} from 'react';
import Context from '../contexts/NetflixContext';
import NetflixAPI from '../api/NetflixAPI';
import * as Constants from '../data/Constants';

{/* This ContextProvider class contains all the App's state variables and functions */}

class ContextProvider extends Component {
    constructor(){
        super()
        this.state = {
          allTitles:  [],
          count: 0,
          episodes: [],
          titleDetail : null,
          titleDetailPlot: null,
          titleDetailActors: [],
          startYear: Constants.EARLIEST_PRODUCTION_YEAR, 
          endYear: null,      // Used in advanced search
          currentYear: null,  // Used in quick search
          searchString: null,
          genreID: null,
          view: Constants.DEFAULT_VIEW_TYPE,
          type: Constants.DEFAULT_MEDIA_TYPE,
          imdbMin: Constants.DEFAULT_IMDB_MIN,
          imdbMax: Constants.DEFAULT_IMDB_MAX
        }
    }

//Set current year and default value for end year. Populate intro page
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
  stateCopy.endYear = currentYear.getFullYear();
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
    Constants.IMDB_LUCKYPICK_MIN, 
    Constants.IMDB_LUCKYPICK_MAX, 
    (data) => {
      let stateCopy = {...this.state};
      stateCopy.allTitles = data.ITEMS;
      stateCopy.luckyPickItemCount = data.COUNT;
      this.setState(stateCopy, () => {this.displayRandomTitle()});
  }) 
}

displayRandomTitle = () => {
  let luckyPickIndex = 0;
  //Get random number from 1 to number of items in the lucky pick storage
  luckyPickIndex = Math.floor(Math.random() * this.state.allTitles.length);
  if(luckyPickIndex >= 0){
    this.fetchTitleDetail(this.state.allTitles[luckyPickIndex].netflixid);
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
    stateCopy.titleDetailPlot = data.imdbinfo.plot;
    stateCopy.titleDetailActors = data.people[0].actor;
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

performQuickSearch = () => {
  if(this.state.searchString === null || this.state.searchString.length < 3){ 
    alert("Minimum search entry is 3 characters."); 
  } else {  
    this.fetchTitles(
        this.state.searchString, 
        Constants.EARLIEST_PRODUCTION_YEAR, 
        this.state.currentYear, 
        Constants.ALL_GENRES, 
        Constants.ALL_TYPES, 
        Constants.DEFAULT_IMDB_MIN, 
        Constants.DEFAULT_IMDB_MAX
    )
  }
}

performAdvancedSearch = () => {
  if (this.state.startYear < 1900 || this.state.endYear > 2019){
    alert("Year cannot be less than 1900 or more than 2019");
  } else if (this.state.imdbMin < 0 || this.state.imdbMax > 10) {
    alert("IMDB score cannot be less than 0 or more than 10");
  } else {
    this.fetchTitles('', this.state.startYear, this.state.endYear, this.state.type, this.state.genreID, this.state.imdbMin, this.state.imdbMax)
  }
}

sanitizeString = (string) => {
  let sanitizedString = string;
  //remove html tags at the end of string
  if(sanitizedString.includes("<")) {
    let pos = sanitizedString.indexOf("<"); 
    sanitizedString = sanitizedString.substr(0,pos);
  }
  sanitizedString = sanitizedString.split("&amp;#39;").join("'");
  sanitizedString = sanitizedString.split("&#39;").join("'");
  sanitizedString = sanitizedString.split("&rsquo;").join("'");
  return sanitizedString;
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
            pickRandomTitle: this.pickRandomTitle,
            performQuickSearch: this.performQuickSearch,
            performAdvancedSearch: this.performAdvancedSearch,
            sanitizeString: this.sanitizeString
            }}>
        {this.props.children}
        </Context.Provider>
    );
}
}

export default ContextProvider;

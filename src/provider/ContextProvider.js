import React, {Component} from 'react';
import Context from '../contexts/NetflixContext';
import TitleAPI from '../api/TitleAPI';

class ContextProvider extends Component {
    constructor(){
        super()
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
      currentYear:null,
      view: 'icon',
      searchString: null,
      type:'movie',
      genreID: null,
      status:null

        }
    }

//General input handling
handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
}

fetchTitles = (searchString, startYear, endYear, type, genreID) => {
    TitleAPI.getTitles(searchString, startYear, endYear, type, genreID, (data) => {
      let stateCopy = {...this.state};
      stateCopy.titles = data;
      this.setState(stateCopy);
    }) 
  }

  //Sets table view to Icon, Detail or List
changeView = (view) => {
    let stateCopy = {...this.state};
    stateCopy.view = view;
    this.setState(stateCopy);
  }

  //rename to something
fetchTitleDetail = (id) => {
    TitleAPI.getTitleDetail(id, (data) => {
      let stateCopy = {...this.state};
      stateCopy.titleDetail = data;
      this.setState(stateCopy);
    })
  }

render(){
    return(
        <Context.Provider value={{
            state: this.state, 
            handleChange: this.handleChange,
            fetchTitles: this.fetchTitles,
            changeView: this.changeView,
            fetchTitleDetail: this.fetchTitleDetail,
            fetchNewTitles: this.fetchNewTitles
            }}>
        {this.props.children}
        </Context.Provider>
    );
}

}

export default ContextProvider;

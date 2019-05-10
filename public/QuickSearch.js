import React, {Component} from 'react';
import {Container, Row, Col, Jumbotron} from 'react-bootstrap';

// class QuickSearch extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = { 
    //         //searchString: null 
    //     };
    // }

// handleChange = (event) => {
//     this.setState({searchString: event.target.value});
// }

// handleSubmit = () => {
//     //let currentDate = new Date();
//     //const startYear = 1900;
//     //let endYear = currentDate.getFullYear();
//     this.props.fetchTitles(this.props.searchString, this.props.startYear, this.props.endYear, "Any", "Any")
//     this.props.switchScreen("quickSearch");
// }
const QuickSearch = (props) => {
//render(){
    return (
        <div>
            {/* <form className="form-inline my-2 my-lg-0"> */}
                <Row>
                    <Col column sm="8">
                <input className="form-control mr-sm-2" 
                    type="text"
                    // aria-label="Search" 
                    placeholder="Quick Search"
                    name="searchString" 
                    value={props.searchString} 
                    //onChange={props.handleQuickSearchTextChange}
                    onChange={props.handleChange}
                />
                </Col>
                <Col column sm="1">
                <button 
                    className="btn btn-outline-danger my-2 my-sm-0" 
                    type="button" 
                    onClick={() => {
                            if(props.searchString.length > 2){
                                //props.switchScreen("quickSearch");
                                props.submitQuickSearch()
                            } else {
                                alert("Minimum search entry is 3 characters.");
                            }
                        }
                    }>Search
                </button>
                </Col>
                </Row>
            {/* </form> */}
            
         </div>
    );
}
//}
export default QuickSearch;
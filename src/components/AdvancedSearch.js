import React, {Component} from 'react';

class AdvancedSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            startYear: 1900,
            endYear: 2019,
            type: "movie",
            genreID: "1365"
        }
        
    }

handleTextChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
}

handleSubmit = () => {
    this.props.fetchTitles('', this.state.startYear, this.state.endYear, this.state.type, this.state.genreID)
}

render(){
    return (
        <div>
            <label>Start Year</label>
            <input type="text"  name="startYear" value={this.state.startYear} onChange={this.handleTextChange}/>
            <br />
            <label>End Year</label>
            <input type="text"  name="endYear" value={this.state.endYear} onChange={this.handleTextChange}/>
            <br />
            <label>Type</label>
            <select value={this.state.type} name="type" onChange={this.handleTextChange}>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="Any">Movies and Series</option>
            </select>
            <br />
            <label>Genre</label>
            <select value={this.state.genreID} name="genreID" onChange={this.handleTextChange}>
                <option value="1365">Action and Adventure</option>
                <option value="783">Family Movies</option>
                <option value="31574">Classic</option>
                <option value="6548">Comedy</option>
                <option value="5763">Drama</option>
                <option value="6839">Documentary</option>
                <option value="8711">Horror</option>
            </select>
            {this.state.genreID}
            <br />
            <input type="submit" value="Search" onClick={()=>{this.handleSubmit()}}/>
         </div>
    );
}
}
export default AdvancedSearch;
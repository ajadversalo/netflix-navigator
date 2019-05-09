import React, {Component} from 'react';

class QuickSearch extends Component {
    constructor(props){
        super(props);
        this.state = { title: null };
    }

handleTextChange = (event) => {
    this.setState({title: event.target.value});
}

handleSubmit = () => {
    this.props.fetchTitles(this.state.title, 1900, 2019)
}

render(){
    return (
        <div>
            <input type="text"  placeHolder="Title/Actor" value={this.state.title} onChange={this.handleTextChange}/>
            <input type="submit" value="Search" onClick={()=>{this.handleSubmit()}}/>
         </div>
    );
}
}
export default QuickSearch;
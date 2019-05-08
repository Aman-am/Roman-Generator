import React, { Component } from 'react';
import './App.css';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            integer: '',
            roman: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        console.log(this.state.integer);
        return(
            <div className="App">
                <input type="number" name="integer" min="0" onChange={this.handleChange}/>
            </div>
        );
    }
}
export default Main;

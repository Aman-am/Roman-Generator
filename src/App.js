import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            roman: 'I'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let dict = {
            M:1000,
            CM:900,
            D:500,
            CD:400,
            C:100,
            XC:90,
            L:50,
            XL:40,
            X:10,
            IX:9,
            V:5,
            IV:4,
            I:1
        };

        let i,integer,roman = '';
        integer = e.target.value;
        for(i in dict){
            while (integer >= dict[i]){
                roman += i;
                integer -= dict[i];
            }
        }
        this.setState({roman});
    }

    render() {
        return(
            <div className="main">
                <h1>Roman Number Generator</h1>
                <label>
                    {/*Number:*/}
                    <input type="number" name="integer" min="1" onChange={this.handleChange} defaultValue="1"/>
                </label>
                <i className="fas fa-arrow-right"></i>
                <label>
                    {/*Roman:*/}
                    <input type="text" name="roman" value={this.state.roman} disabled/>
                </label>
            </div>
        );
    }
}
export default App;

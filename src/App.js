import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 26}
        ],
        otherState: 'Some other value'
    };

    switchNameHandler = () => {
        // console.log("Was Clicked!");
        // DON'T DO THIS: this.state.persons[0].name = 'Maxmilian'
        this.setState({
            persons: [
                {name: 'Maxmilian', age: 28},
                {name: 'Manu', age: 29},
                {name: 'Stephanie', age: 27}
            ]
        })
    };

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React app</h1>
                <p>This is really working!</p>
                <button onClick={this.switchNameHandler}>Switch name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
        // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'HI I\'m React app'));
    }
}

export default App;

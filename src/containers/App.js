import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../Cockpit/Cockpit'

class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] componentDidUpdate');
    }

    //states
    state = {
        persons: [
            {id: '1', name: 'Max', age: 28},
            {id: '2', name: 'Manu', age: 29},
            {id: '3', name: 'Stephanie', age: 26}
        ],
        otherState: 'Some other value',
        showPersons: false,
        showCockpit: true
    };

    //state change handlers
    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });

    };

    deletePersonHandler = (personIndex) => {
        // vanilla syntax slice() will create a copy of array
        // const persons = this.state.persons.slice();
        // ES6 syntax
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({
            persons: persons
        })
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    };

    render() {
        console.log('[App.js] render');
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}/>
            );
        }


        return (
            <div className={classes.App}>
                <button onClick={() => {
                    this.setState({
                        showCockpit: false
                    });
                }}>Remove Cockpit</button>
                {this.state.showCockpit ?
                    <Cockpit personsLength={this.state.persons.length}
                             showPersons={this.state.showPersons}
                             clicked={this.togglePersonsHandler}
                             title={this.props.appTitle}
                    /> : null
                }
                {persons}
            </div>
        );
    }
}

export default App;
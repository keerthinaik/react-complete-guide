import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {id: '1', name: 'Max', age: 28},
            {id: '2', name: 'Manu', age: 29},
            {id: '3', name: 'Stephanie', age: 26}
        ],
        otherState: 'Some other value',
        showPersons: false
    };



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

        const style = {
            backgroundColor: 'green'
        };

        let persons = null;

        style.backgroundColor = 'green';

        if (this.state.showPersons) {
            style.backgroundColor = 'red';
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person
                                click={() => this.deletePersonHandler(index)}
                                changed={(event) => this.nameChangedHandler(event, person.id)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                            />
                        })
                    }
                </div>
            );
        }

        let classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React app</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <button
                    style={style}
                    onClick={() => this.togglePersonsHandler('Maxmilian!!')}>Toggle Names
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
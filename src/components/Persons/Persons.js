import React ,{ Component } from 'react'
import Person from "./Person/Person";

class Persons extends Component{

    // static getDerivedStateFromProps(props, state){
    // initial state is null gives warning so we have commented this line
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Persons.js] shouldComponentUpdate');
        if (nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!!!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] render');
        return this.props.persons.map((person, index) => {
            return <Person
                clicked={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id}
            />
        });
    }
}

export default Persons;
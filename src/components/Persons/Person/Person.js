import React, { Component } from 'react';
import classes from './Person.css'
import PropTypes from 'prop-types'
import Aux from '../../../hoc/Auxilary'
import withClass from '../../../hoc/WithClass'
import AuthContext from '../../../context/auth-context'

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] render');
        return (
            <Aux>

                        {this.context.authenticated ? <p> Authenticated </p> : <p> Please Login </p>}

                <p onClick={this.props.clicked}>I'm {this.props.name} and {this.props.age} years old.</p>
                <input
                ref={this.inputElementRef}
                type="text"
                onChange={this.props.changed}
                value={this.props.name}/>
            </Aux>
        )
    }
}

Person.propTypes = {
    clicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);
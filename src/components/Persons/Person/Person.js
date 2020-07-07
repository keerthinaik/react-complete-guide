import React from 'react';
// import classes from './Person.css'
import Aux from '../../../hoc/Auxilary'

const person = (props) => {
    console.log('[Person.js] render');
    return (
        // <div className={classes.Person}>
        <Aux>
            <p onClick={props.clicked}>I'm {props.name} and {props.age} years old.</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </Aux>
        // </div>
    )
};

export default person;
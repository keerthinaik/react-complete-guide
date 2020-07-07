import React from 'react';
import classes from './Person.css'

const person = (props) => {
    console.log('[Person.js] render');
    return (
        <div className={classes.Person}>
            <p onClick={props.clicked}>I'm {props.name} and {props.age} years old.</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;
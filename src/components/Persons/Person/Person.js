import React, { Fragment } from 'react';
// import classes from './Person.css'
import Aux from '../../../hoc/Auxilary'

const person = (props) => {
    console.log('[Person.js] render');
    return (
        // <div className={classes.Person}>
        <Fragment>
            <p onClick={props.clicked}>I'm {props.name} and {props.age} years old.</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </Fragment>
        // </div>
    )
};

export default person;
import React, { useEffect } from 'react';
import classes from "./Cockpit.css";

const cockpit = ( props ) => {

    useEffect(() => {
        // runs when component is mounted
        console.log('[Cockpit.js] useEffect');

        // Http requests
        const timer = setTimeout(() => {
            alert('saved data to cloud');
        }, 2000);
        return () => {
            // runs when component is unmounted
            clearTimeout(timer);
            console.log('[Cockpit.js] clean up work in useEffect');
        }
    }, [props.persons]); // it implies useEffect will execute only when the persons changed.

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Names
            </button>
        </div>
    );
};

export default cockpit;
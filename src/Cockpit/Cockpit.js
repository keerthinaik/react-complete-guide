import React, { useEffect, useRef, useContext } from 'react';
import classes from "./Cockpit.css";
import AuthContext from '../context/auth-context'

const cockpit = ( props ) => {

    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        // runs when component is mounted
        console.log('[Cockpit.js] useEffect');

        // Http requests
        const timer = setTimeout(() => {
            alert('saved data to cloud');
        }, 2000);
        toggleButtonRef.current.click();
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

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength<= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                ref={toggleButtonRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Names
            </button>
            <button onClick={authContext.login}>Log in</button>
        </div>
    );
};

export default React.memo(cockpit);
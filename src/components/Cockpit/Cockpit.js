import React from 'react';

import styles from './Cockpit.css'

const cockpit = (props) => {
    const classes = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = styles.Red;
    }
    
    if (props.persons.length <= 2) {
      classes.push( styles.red );
    }
    if (props.persons.length <= 1) {
      classes.push( styles.bold );
    }

    return (
        <div className={styles.Cockpit}>
            <h1>This is a React App!!!</h1>
            <h1>{ props.appTitle }</h1>
            <p className={classes.join(' ')}>Yayyy...autoclose works!</p>        
            <button className={btnClass} onClick={props.clicked}>
            Toggle Persons
            </button>
        </div>
    );
}

export default cockpit;
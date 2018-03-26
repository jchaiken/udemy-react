import React, { Component } from 'react';
import styles from './App.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';

class App extends Component {
  state = {
    persons: [
      { id: 'jfkdjfkd', name: 'Max', age: 28 },
      { id: 'asdwerw', name: 'Jennifer', age: 39 },
      { id: 'sjfkoof', name: 'Morgan', age: 24 }
    ],
    otherState: 'some other value'
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // using the spread operator, more modern approach
    const person = {
      ...this.state.persons[personIndex]
    };

    // alternative
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } )
  }

  deletePersonHandler = (personIndex) => {
    // slice is used to copy the array instead of just pointing to it
    // const persons = this.state.persons.slice();
    // spread operator (...) can be used instead as below
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState( {persons: persons} );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( {showPersons: !doesShow} );
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            // the key has to be placed in the outer element in a map method
            return <ErrorBoundry key={person.id}>
                <Person
                click={this.deletePersonHandler}
                name={person.name}
                age={person.age}                
                changed={(event) => this.nameChangedHandler(event, person.id)} />
              </ErrorBoundry>
          })}
        </div>
      );
      btnClass = styles.Red;      
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push( styles.red );
    }
    if (this.state.persons.length <= 1) {
      classes.push( styles.bold );
    }

    return (
      <div className={styles.App}>
      {/* <div className="App"> */}
        <h1>This is a React App!!!</h1>
        <p className={classes.join(' ')}>Yayyy...autoclose works!</p>
        
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        
        {persons}
      </div>
    );
    
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Jennifer', age: 39 },
      { name: 'Morgan', age: 24 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS:  this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Jennifer', age: 39 },
        { name: 'Morgan', age: 13 }
      ],
      otherState: 'some other value',
      showPersons: false
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Jennifer', age: 39 },
        { name: event.target.value, age: 13 }
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    // an alternative to the terinary option below
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}/>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Max!')}
              >My Hobbies: Racing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              changed={this.nameChangedHandler}/>
            {/* <Person name="Max" age="28" /> */}
            {/* <Person name="Jennifer" age="39">My Hobbies: Racing</Person> */}
            {/* <Person name="Stephanie" age="28" /> */}
          </div>
      );
    }

    return (
      <div className="App">
        <h1>This is a React App!!!</h1>
        <p>Yayyy...autoclose works!</p>
        
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        
        {persons}

        {/* { this.state.showPersons ?  */}
           
          {/* : null */}
        {/* } */}
      </div>
    );
    // the above code is compiled as shown below
    // return React.createElement('div', null, 'h1', 'Hi, I\'m a react app!!!');
    // return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?'));
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

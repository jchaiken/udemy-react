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

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS:  this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Jennifer', age: 39 },
        { name: 'Morgan', age: 13 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>This is a React App!!!</h1>
        <p>Yayyy...autoclose works!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        {/* display the person component */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <Person name="Max" age="28" />
        <Person name="Jennifer" age="39">My Hobbies: Racing</Person>
        <Person name="Stephanie" age="28" />
      </div>
    );
    // the above code is compiled as shown below
    // return React.createElement('div', null, 'h1', 'Hi, I\'m a react app!!!');
    // return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?'));
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

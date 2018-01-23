import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {    
    username: 'StormySunshine'
  }

  changeUserHandler = (event) => {
    this.setState( {
      username: event.target.value
    })
  }

  render() {

    
    return (
      <div className="App">
        
        <h1>First Assignment</h1>
        <UserInput
          username={this.state.username}          
          changed={this.changeUserHandler}/>       
        
        <UserOutput username={this.state.username}/>
        
        
      </div>
    );

  }
}

export default App;

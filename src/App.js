import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: "Some other value"
  }
  
  switchNameHandler = () => {
    // console.log("I am working");
    this.setState( {
      persons: [
       { name: "Maximilian", age: 28 },
       { name: "Manu", age: 29 },
       { name: "Stephanie", age: 27 }
       ]
    } )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29">Hobbies: Racing</Person>
        <Person name="Stepahnie" age="26"/>
      </div>
    );
  }
}

export default App;

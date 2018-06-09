import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Royden", age: 28 },
      { name: "Daniel", age: 29 },
      { name: "Anthony", age: 26 }
    ],
    otherState: "Some other value",
    showPersons: true
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28, id: 1 },
        { name: "B", age: 29, id: 2 },
        { name: "C", age: 27, id: 3 },
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: "green",
      border: "1x solid blue",
      color: '#fff',
      cursor: "pointer",
      font: "inherit",
      padding: "8px",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        < div >
          {this.state.persons.map((person, index) => {
            return (<Person
              click={() => { console.log(person, index); this.deletePersonHandler(index) }}
              name={person.name}
              age={person.age}
              key={person.id}
              change={(event) => this.nameChangeHandler(event, person.id)} />)
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    let classes = this.state.persons.length <= 2 ? 'red' : '';
    classes += this.state.persons.length <= 1 ? ' bold' : '';

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <p className={classes}>This is working!</p>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;

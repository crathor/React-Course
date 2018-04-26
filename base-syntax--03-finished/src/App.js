import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      {id: 'sdgsw', name: 'Max', age: 28 },
      {id: 'wqdqwef', name: 'Manu', age: 29 },
      {id: 'fewweew', name: 'Stephanie', age: 26 }
    ],
    showPersons: false,
    otherState: 'some other value'
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex(person => {
      return person.userId === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    // const person = Object.assign({}, this.state.persons[personIndex]);
    persons[personIndex] = person;
    this.setState( {
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    this.setState(prevState => ({showPersons: !prevState.showPersons}));
  }

  render () {
    const style = {
      backgroundColor: 'green',
      color: '#FFF',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };
    let persons = null;
    if(this.state.showPersons){
      persons =
      (<div>
        {this.state.persons.map((person, index) => {
          return <ErrorBoundary key={person.id}><Person
            changed={(event) => this.nameChangedHandler(event, person.id)}
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            /></ErrorBoundary>
        })}
      </div>);
      style.backgroundColor = 'red';
    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}> This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Show People List</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

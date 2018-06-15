import React, { PureComponent } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import WithClasses from '../hoc/WithClasses';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

// ONLY USE PURE COMPONENTS IF YOU KNOW UPDATES MAY NOT BE REQUIRED

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);

    this.state = {
      persons: [
        {id: 'sdgsw', name: 'Max', age: 28 },
        {id: 'wqdqwef', name: 'Manu', age: 29 },
        {id: 'fewweew', name: 'Stephanie', age: 26 }
      ],
      showPersons: false,
      otherState: 'some other value',
      toggleClickedCounter: 0,
      authenticated: false
    }
  }
  static getDerivedStateFromProps(nextProps, prevState){
    console.log('[App.js] Inside getDerivedStateFromProps', nextProps, prevState);
  }

  getSnapshotBeforeUpdate(){
    console.log('[App.js] Inside getSnapshotBeforeUpdate');
  }
  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }
  componentDidMount(){
    console.log('[App.js] Inside componentDidMount');
  }
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE App.js] Inside the shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
  //   //return true;
  // }
  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside the componentWillUpdate', nextProps, nextState);
  }
  componentDidUpdate(){
    console.log('[UPDATE App.js] Inside the componentDidUpdate');
  }


  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex(person => {
      return person.id === id;
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
    this.setState(prevState => ({
      showPersons: !prevState.showPersons,
      toggleClickedCounter: prevState.toggleClickedCounter + 1}));
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render () {
    console.log('[App.js] Inside Render');
    let persons = null;
    if(this.state.showPersons){
      persons = <Persons
          isAuthenticated={this.state.authenticated}
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
    }
    return (
      <Aux>
      <button onClick={()=>{this.setState({showPersons: true})}}>Show Persons</button>
      <Cockpit
        login={this.loginHandler}
        appTitle={this.props.title}
        persons={this.state.persons}
        showPersons={this.state.showPersons}
        clicked={this.togglePersonsHandler} />
      <AuthContext.Provider value={this.state.authenticated}>
        {persons}
      </AuthContext.Provider>
      </Aux>
    );
  }
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default withClass(App, 'App');

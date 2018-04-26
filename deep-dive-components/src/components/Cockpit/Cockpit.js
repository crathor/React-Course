import React from 'react';
import './Cockpit.css';
import Aux from '../../hoc/Aux'

const Cockpit = ( props ) => {

  const style = {
    backgroundColor: 'green',
    color: '#FFF',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };

  const classes = [];
  if(props.persons.length <= 2){
    classes.push('red');
  }
  if(props.persons.length <= 1){
    classes.push('bold');
  }
  if(props.showPersons){
    style.backgroundColor = 'red';
  }
  return(
    <Aux>
    <h1>{props.appTitle}</h1>
    <p className={classes.join(' ')}> This is really working!</p>
    <button
      style={style}
      onClick={props.clicked}>Show People List</button>
    <button onClick={props.login}>Log in</button>
    </Aux>
  );
}

export default Cockpit;

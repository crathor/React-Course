import React from 'react';

const UserInput = ( props ) => {
  const style ={
    fontSize: '24px',
    padding: '10px',
    textAlign: 'center'
  }
  return (
    <input style={style} type='text' onChange={props.changeUsername} value={props.username}></input>
  );
};

export default UserInput;

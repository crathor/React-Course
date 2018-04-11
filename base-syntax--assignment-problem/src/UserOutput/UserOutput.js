import React from 'react';
import './UserOutput.css';

const UserOutput = ( props ) => {
  return (
    <div className="UserOutput">
      <h4>{props.username}</h4>
      <p>Age: {props.age}</p>
      <p>Hobbies: {props.hobbies}</p>
    </div>
  );
};

export default UserOutput;

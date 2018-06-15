import React from 'react';

const WithClasses = props => {
  return(
  <div className={props.classes}>
    {props.children}
  </div>
);
}

export default WithClasses;

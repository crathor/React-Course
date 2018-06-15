import React from 'react';
import classes from './MenuButton.css';

const MenuButton = ( props ) => {
  return (
    <button onClick={props.clicked} className={classes.MenuButton}>
      <i className="fas fa-bars"></i>
    </button>
  );
};

export default MenuButton;

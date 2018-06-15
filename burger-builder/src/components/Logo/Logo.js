import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const Logo = ( props ) => {
  return (
    <div className={classes.Logo} style={{height: props.height, marginBottom: props.marginBottom}}>
      <img src={BurgerLogo} alt="MyBurger"/>
    </div>
  );
};

export default Logo;

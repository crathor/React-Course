import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuButton from '../../UI/MenuButton/MenuButton';

const Toolbar = ( props ) => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.MobileOnly}>
        <MenuButton clicked={props.openSidebar}/>
      </div>
      <Logo height='80%'/>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;

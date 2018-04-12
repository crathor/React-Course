import React from 'react';

const CharComponent = props => {
  const color = props.char === ' ' ? '#000000' : '#14a3bc';
  const style = {
    display: 'inline-block',
    width: '16px',
    height: '16px',
    padding: '16px',
    textAlign: 'center',
    margin: '5px',
    border: '1px solid black',
    boxShadow: '0 2px 3px #000000',
    background: `${color}`,
    color: '#FFFFFF',
    fontSize: '20px',
    fontWeight: 'bold',
    borderRadius: '8px',
    boxShadow: '1px 1px 2px 2px #000000, inset -1px -1px 8px 4px #094f3c, inset 1px 1px 8px 4px #094f3c'
  }
  return(
    <div style={style} onClick={props.removeChar}>
      {props.char}
    </div>
  )
}

export default CharComponent;

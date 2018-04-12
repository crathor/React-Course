import React from 'react';

const ValidationComponent = props => {
  const style = {
    marginTop: '10px'
  }
  const text = props.textLength > 5
  ? 'Text long enough'
  : 'Text too short';
  return(
    <small style={style}>
      {text}
    </small>
  )
}

export default ValidationComponent;

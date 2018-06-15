import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state={
    paragraphText: ''
  }

  changeParagraphHandler = ( event ) => {
    this.setState({paragraphText: event.target.value});
  };
  removeCharHandler = index => {
    let text = [...this.state.paragraphText];
    text.splice(index, 1);
    this.setState({paragraphText: text.join('')});
  }
  render() {
    const text = this.state.paragraphText.split('').map((c, index) => {
      return <CharComponent
        key={index}
        removeChar={() => this.removeCharHandler(index)}
        char={c} />;
    });
    return (
      <div className="App">
        <div className='inputContainer'>
          <input
            className='mainInput'
            type='text'
            value={this.state.paragraphText} onChange={this.changeParagraphHandler} placeholder='Place your text here'></input>
          <ValidationComponent textLength={this.state.paragraphText.length} />
        </div>
        <p>Text length: {this.state.paragraphText.length}</p>
        <div className='characters'>
          {text}
        </div>
      </div>
    );
  }
}

export default App;

require('normalize.css');
require('styles/App.css');

import React from 'react/addons';
import Input from './Input';
import Output from './Output';

const App = React.createClass({

  getInitialState() {
    return {
      inputText: '',
    };
  },

  setInputText(str = '') {
    this.setState({
      inputText: str,
    });
  },

  render() {
    return (
      <div className="app-container">
        <Input
          text={this.state.inputText}
          handleInputChange={this.setInputText} />
        <Output text={this.state.inputText} />
      </div>
    );
  },

});

export default App;

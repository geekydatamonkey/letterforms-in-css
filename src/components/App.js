require('normalize.css');
require('styles/app.scss');
require('styles/typography.scss');
require('styles/kerning.scss');

import React from 'react/addons';
import Input from './Input';
import Output from './Output';

const App = React.createClass({

  getInitialState() {
    return {
      inputText: 'Hey Jasio',
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

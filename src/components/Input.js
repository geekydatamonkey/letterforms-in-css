require('styles/main-input.scss');

import React from 'react';

const Input = React.createClass({

  propTypes: {
    text: React.PropTypes.string.isRequired,
    handleInputChange: React.PropTypes.func.isRequired,
  },

  handleChange() {
    const str = React.findDOMNode(this.refs.textInput).value;
    this.props.handleInputChange(str);
  },

  render() {
    return (
      <div className="main-input">
        <input
          ref="textInput"
          type="text"
          value={this.props.text}
          placeholder="type something..."
          onChange={this.handleChange} />
      </div>
    );
  },
});

export default Input;

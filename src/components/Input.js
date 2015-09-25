
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
      <input
        ref="textInput"
        type="text"
        value={this.props.text}
        onChange={this.handleChange} />
    );
  },
});

export default Input;

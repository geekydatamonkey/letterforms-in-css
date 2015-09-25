
import React from 'react';
import Letter from './Letter';

const Output = React.createClass({

  propTypes: {
    text: React.PropTypes.string,
  },

  getDefaultProps() {
    return '';
  },

  renderLetters() {
    return this.props.text.split('').map((char, idx) => {
      return <Letter key={idx} char={char} />;
    });
  },

  render() {
    return (
      <div className="output-container">
        { this.renderLetters() }
      </div>
    );
  },

});

export default Output;

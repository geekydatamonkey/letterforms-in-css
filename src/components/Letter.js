import React from 'react';
import charClasses from './charClasses';

const Letter = React.createClass({

  propTypes: {
    char: React.PropTypes.string.isRequired,
  },

  getCharClasses() {
    const char = this.props.char.toUpperCase();
    return charClasses[char];
  },

  getWrapperClassNames() {
    const classes = this.getCharClasses();
    if (!classes) {
      console.warn(`no style information for character '${this.props.char}'`);
      return '';
    }
    return this.getCharClasses().wrapper;
  },

  getInnerClassNames() {
    const classes = this.getCharClasses();
    if (! classes) {
      return [];
    }
    return this.getCharClasses().inner;
  },

  renderInner() {
    // need one div for each inner class
    const innerClasses = this.getInnerClassNames();
    return innerClasses.map((classNames, idx) => {
      return (
        <div key={idx} className={ classNames }/>
      );
    });
  },

  getLetterClass() {
    return 'letterform letter-' + this.props.char;
  },

  render() {
    return (
      <span className={this.getLetterClass() }>
        <div className={ this.getWrapperClassNames() } >
          { this.renderInner() }
        </div>
      </span>
    );
  },
});

export default Letter;

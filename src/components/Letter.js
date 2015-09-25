import React from 'react';
import charClasses from './charClasses';

const Letter = React.createClass({

  propTypes: {
    char: React.PropTypes.string.isRequired,
  },

  getWrapperClassNames() {
    return charClasses[this.props.char].wrapper;
  },

  getInnerClassNames() {
    return charClasses[this.props.char].inner;
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

  render() {
    return (
      <span className="letterform">
        <div className={ this.getWrapperClassNames() } >
          { this.renderInner() }
        </div>
      </span>
    );
  },
});

export default Letter;

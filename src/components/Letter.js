
import React from 'react';
import classNames from 'classnames';

class Letter extends React.Component {
  getClassNames() {
    return classNames({
      'letterform': true,
      'metrics_cont': true,
      'Y': true,
    });
  }

  render() {
    return (
      <span className={this.getClassNames()}>
        A
      </span>
    );
  }
}

export default Letter;

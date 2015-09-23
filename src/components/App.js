require('normalize.css');
require('styles/App.css');

import React from 'react/addons';
import Letter from './Letter';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Letter />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
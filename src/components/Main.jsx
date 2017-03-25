require('normalize.css/normalize.css');
require('../styles/App.scss');

import React from 'react';
import Section from './Section';

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <Section />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

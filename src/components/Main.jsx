require('normalize.css/normalize.css');
require('../styles/App.scss');
require('../styles/Login.css');

import React from 'react';
// import Section from './Section';
import LoginForm from './LoginForm';

class AppComponent extends React.Component {
  render() {
    return (
      /**
       * <Section />
       */
      // <LoginForm />
      <div>{this.props.children}</div>
      
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

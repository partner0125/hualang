require('normalize.css/normalize.css');
require('../styles/App.scss');
require('../styles/Login.css');
require('../styles/Regist.css');
require('../styles/AlbumList.css');

import React from 'react';

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

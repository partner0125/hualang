import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import { Router, Route, hashHistory } from 'react-router';
import LoginForm from './components/LoginForm';
import RegistForm from './components/RegistForm';
import AlbumList from './components/AlbumList';
import Section from './components/Section';
import Uploads from './components/Uploads';


// Render the main component into the dom
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={LoginForm} />
    <Route path="/regist" component={RegistForm} />
    <Route path="/albumlist" component={AlbumList} />
    <Route path="/albumlist/:username" component={AlbumList} />
    <Route path="/section/:id" component={Section} />
    <Route path="/upload" component={Uploads}/>
  </Router>
), document.getElementById('app'));

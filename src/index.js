import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import { Router, Route, hashHistory } from 'react-router';
import LoginForm from './components/LoginForm';
import Section from './components/Section';
import AlbumList from './components/AlbumList';

// Render the main component into the dom
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={LoginForm} />
    <Route path="/section/:id" component={Section} />
    <Route path="/albumlist" component={AlbumList} />
    
  </Router>
), document.getElementById('app'));

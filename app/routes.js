import React from 'react';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import {
  Route,
  DefaultRoute,
} from 'react-router';

export default (
    <Route name="top" handler={App} path="/">
      <DefaultRoute handler={Home} />
    </Route>
);

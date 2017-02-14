import React from 'react';
import Route from 'react-router/lib/Route';

import IndexRoute from 'react-router/lib/IndexRoute';

import App from './components/App';

import Content1 from './components/Content1';
import Content2 from './components/Content2';

export default (
  <Route path="/" name="Templates" component={App}>
    <IndexRoute component={Content1} />
    <Route path="content1" name="Content 1" component={Content1} />
    <Route path="content2" name="Content 2" component={Content2} />
  </Route>
);

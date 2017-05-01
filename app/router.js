import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';


// Pages
import Home from './components/home';
import CompanyListContainer from './components/containers/company-list-container';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="actions" component={CompanyListContainer}/>
    </Route>
  </Router>
);

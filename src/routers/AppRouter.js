import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from '../components/Navbar';
import InfoApp from '../components/InfoApp';
import About from '../components/About';
import Home from '../components/Home';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/list/:page" component={InfoApp} exact={true} />
        <Route path="/about/" component={About} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

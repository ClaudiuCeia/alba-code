import React from 'react';
import {
  Route,
  Router,
  Switch,
} from 'react-router-dom';

import App from './App';

import HomeContainer from './containers/HomeContainer';
import NotFoundContainer from './containers/NotFoundContainer';

import history from './history';

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={App}>
      <App>
        <Switch>
          <Route exact path="/" render={(props) =>
            <HomeContainer {...props} />
          }/>
          <Route render={(props) =>
            <NotFoundContainer {...props} />
          }/>
        </Switch>
      </App>
    </Router>
  );
}

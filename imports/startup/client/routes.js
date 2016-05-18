import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { App } from '../../ui/layouts/app';
import { Documents } from '../../ui/pages/documents';
import { Records } from '../../ui/pages/records';
import { Index } from '../../ui/pages/index';
import { Login } from '../../ui/pages/login';
import { NotFound } from '../../ui/pages/not-found';
import { RecoverPassword } from '../../ui/pages/recover-password';
import { ResetPassword } from '../../ui/pages/reset-password';
import { Signup } from '../../ui/pages/signup';
import { Test } from '../../ui/pages/test';

import { DashboardContainer } from '../../ui2/containers/dashboard-container';
import { Index as NewIndex } from '../../ui2/pages/index';
import { Test as NewTest } from '../../ui2/pages/test';
import { UserPage } from '../../ui2/pages/user-page';

const requireAuth = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ DashboardContainer } onEnter={ requireAuth }>
        <IndexRoute name="index" component={ Index } />
        <Route name="userPage" path="/user/:username" component={ UserPage } />
        <Route name="newIndex" path="/newIndex" component={ NewIndex } />
        <Route name="newTest" path="/newTest" component={ NewTest } />
        <Route name="test" path="/test" component= { Test } />
        <Route name="documents" path="/documents" component={ Documents } />
        <Route name="records" path="/records" component={ Records } />
      </Route>
      <Route name="login" path="/login" component={ Login } />
      <Route name="signup" path="/signup" component={ Signup } />
      <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
      <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
      <Route path="*" component={ NotFound } />
    </Router>,
    document.getElementById('react-root')
  );
});

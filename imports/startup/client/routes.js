import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { App } from '../../ui/layouts/app';
import { Documents } from '../../ui/pages/documents';
import { Index } from '../../ui/pages/index';
import { NotFound } from '../../ui/pages/not-found';
import { RecoverPassword } from '../../ui/pages/recover-password';
import { ResetPassword } from '../../ui/pages/reset-password';
import { Signup } from '../../ui/pages/signup';
import { Test } from '../../ui/pages/test';

import { DashboardContainer } from '../../ui2/containers/dashboard-container';
import { SignedOut } from '../../ui2/layouts/signed-out';
import { Index as NewIndex } from '../../ui2/pages/index';
import { Test as NewTest } from '../../ui2/pages/test';
import { UserPage } from '../../ui2/pages/user-page';
import { Records } from '../../ui2/pages/records';
import { Login } from '../../ui2/components/login';

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
      <Route name="signup" path="/signup" component={ Signup } />
      <Route component={ SignedOut }>
        <Route name="login" path="/login" msg="Router msg" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
      </Route>
      <Route path="*" component={ NotFound } />
    </Router>,
    document.getElementById('react-root')
  );
});

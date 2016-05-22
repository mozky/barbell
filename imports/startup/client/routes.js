import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';

import { Documents } from '../../ui/pages/documents';
import { Index } from '../../ui/pages/index';
import { Test } from '../../ui/pages/test';

import { DashboardContainer } from '../../ui2/containers/dashboard-container';
import { SignedOut } from '../../ui2/layouts/signed-out';
import { Index as NewIndex } from '../../ui2/pages/index';
import { Test as NewTest } from '../../ui2/pages/test';
import { UserPage } from '../../ui2/pages/user-page';
import { Records } from '../../ui2/pages/records';
import { LoginBox } from '../../ui2/components/account/login';
import { RegisterBox } from '../../ui2/components/account/register';
import { RecoverPasswordBox } from '../../ui2/components/account/recover-password';
import { ResetPasswordBox } from '../../ui2/components/account/reset-password';
import { NotFound } from '../../ui2/pages/not-found';

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
      <Route component={ SignedOut }>
        <Route name="login" path="/login" component={ LoginBox } />
        <Route name="register" path="/register" component={ RegisterBox } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPasswordBox } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPasswordBox } />
      </Route>
      <Route path="/" component={ DashboardContainer } onEnter={ requireAuth }>
        <IndexRoute name="index" component={ Index } />
        <Route name="userPage" path="/user/:username" component={ UserPage } />
        <Route name="newIndex" path="/newIndex" component={ NewIndex } />
        <Route name="newTest" path="/newTest" component={ NewTest } />
        <Route name="test" path="/test" component= { Test } />
        <Route name="documents" path="/documents" component={ Documents } />
        <Route name="records" path="/records" component={ Records } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});

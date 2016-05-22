import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';

import { SignedOut } from '../../ui/layouts/signed-out';
import { DashboardContainer } from '../../ui/containers/dashboard-container';

import { LoginBox } from '../../ui/components/account/login';
import { RegisterBox } from '../../ui/components/account/register';
import { RecoverPasswordBox } from '../../ui/components/account/recover-password';
import { ResetPasswordBox } from '../../ui/components/account/reset-password';

import { Index } from '../../ui/pages/index';
import { Test } from '../../ui/pages/test';
import { UserPage } from '../../ui/pages/user-page';
import { Records } from '../../ui/pages/records';
import { Documents } from '../../ui/pages/documents';
import { ServerError } from '../../ui/pages/server-error';
import { NotFound } from '../../ui/pages/not-found';


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
        <Route name="test" path="/test" component= { Test } />
        <Route name="documents" path="/documents" component={ Documents } />
        <Route name="records" path="/records" component={ Records } />
        <Route name="serverError" path="/500" component={ ServerError } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});

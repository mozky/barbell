import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Dashboard } from '../layouts/dashboard';
import { browserHistory } from 'react-router';

// IDEA: Maybe use context for the user object instead of passing it as props

export const DashboardContainer = createContainer(() => {
  const user = Meteor.user();
  const handleLogout = () => {
    Meteor.logout(() =>
      browserHistory.push('/login')
    );
  };

  return {
    user,
    handleLogout,
  };
}, Dashboard);

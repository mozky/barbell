import React from 'react';
import HeaderBar from '../components/dashboard/headerbar';
import NavigationMenu from '../components/dashboard/navigation-menu';
import { Footer } from '../components/dashboard/footer';

export const Dashboard = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
    user: React.PropTypes.object,
    handleLogout: React.PropTypes.func.isRequired,
  },

  render() {
    const body = document.body;

    if (body.className.indexOf('skin-black-light sidebar-mini wysihtml5-supported') === -1) {
      body.className = body.className.replace(/.*/, '');
      body.className += 'skin-black-light sidebar-mini wysihtml5-supported';
    }

    const handleLogout = this.props.handleLogout;
    const user = this.props.user;
    let name = '';
    let username = '';
    if (user) {
      name = user.profile.name.first + ' ' + user.profile.name.last;
      username = user.username;
    }
    return (
      <div className="wrapper">
        <HeaderBar name={ name } username={ username } handleLogout={ handleLogout }/>
        <NavigationMenu name={ name }/>
        { this.props.children }
        <Footer />
      </div>
    );
  },
});

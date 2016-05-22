import React from 'react';
import { BoxBody } from '../components/signed-out/box-body';
import { LoginBox } from '../components/login.js';

export const SignedOut = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
    route: React.PropTypes.object,
  },

  // componentWillUnmount() {
  //   const body = document.body;
  //   body.className = body.className.replace(/.*/, '');
  // },

  render() {
    const body = document.body;

    if (body.className.indexOf('hold-transition register-page') === -1) {
      body.className = body.className.replace(/.*/, '');
      body.className += 'hold-transition login-page';
    }

    return (
      <div className="hold-transition login-page">
        { this.props.children }
        {/* <HeaderBar name={ name } username={ username } handleLogout={ handleLogout }/>
        <NavigationMenu name={ name }/>
        <div className="content-wrapper">
          { this.props.children }
        </div> */}
      </div>
    );
  },
});

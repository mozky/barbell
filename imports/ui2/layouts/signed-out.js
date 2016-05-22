import React from 'react';
import { BoxBody } from '../components/signed-out/box-body';
import { LoginBox } from '../components/login.js';

export const SignedOut = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
    route: React.PropTypes.object,
  },

  render() {
    const body = document.body;

    if (body.className.indexOf('hold-transition login-page') === -1) {
      body.className = body.className.replace(/./, '');
      body.className += 'hold-transition login-page';
    }

    return (
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <a href="/"><b>Barbell</b>APP</a>
          </div>
          <LoginBox msg={ this.props.route.msg } content={ this.props.children }/>

        </div>
        {/* <HeaderBar name={ name } username={ username } handleLogout={ handleLogout }/>
        <NavigationMenu name={ name }/>
        <div className="content-wrapper">
          { this.props.children }
        </div> */}
      </div>
    );
  },
});

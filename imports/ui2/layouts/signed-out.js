import React from 'react';
import { BoxBody } from '../components/signed-out/box-body';

export const SignedOut = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
    title: React.PropTypes.string,
  },

  render() {
    const body = document.body;
    body.className = body.className.replace(' sidebar-collapse', '');

    if (body.className.indexOf('hold-transition login-page') === -1) {
      body.className += 'hold-transition login-page';
    } else {
      body.className = body.className.replace(' sidebar-collapse', '');
    }

    const msg = 'Login to access barbell';
    return (
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <a href="/"><b>Barbell</b>APP</a>
          </div>
          <BoxBody msg={ msg } content={ this.props.children }/>

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

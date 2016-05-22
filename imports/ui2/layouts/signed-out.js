import React from 'react';

export const SignedOut = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
    route: React.PropTypes.object,
  },

  render() {
    const body = document.body;

    if (body.className.indexOf('hold-transition register-page') === -1) {
      body.className = body.className.replace(/.*/, '');
      body.className += 'hold-transition login-page';
    }

    return (
      <div className="hold-transition login-page">
        { this.props.children }
      </div>
    );
  },
});

import React from 'react';
import { handleRecoverPassword } from '../../../modules/recover-password';

export const RecoverPasswordBox = React.createClass({
  componentDidMount() {
    handleRecoverPassword({ component: this });
  },

  handleSubmit(event) {
    event.preventDefault();
  },

  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="/"><b>Barbell</b>APP</a>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">Enter your email address below to receive a link to reset your password.</p>
          <form ref="recoverPassword" className="recover-password" onSubmit={ this.handleSubmit }>
            <div className="form-group has-feedback">
              <input type="email" ref="emailAddress" name="emailAddress" className="form-control" placeholder="Email"></input>
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <button type="submit" className="btn btn-primary btn-block btn-flat">Send email</button>
          </form>

          <a href="/login" className="text-center">I already have a membership</a><br></br>
          <a href="/register" className="text-center">Register a new membership</a>
        </div>
      </div>
    );
  },
});

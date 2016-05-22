import React from 'react';
import { handleResetPassword } from '../../../modules/reset-password';

export const ResetPasswordBox = React.createClass({
  componentDidMount() {
    handleResetPassword({
      component: this,
      token: this.props.params.token,
    });
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
          <p className="login-box-msg">
            To reset your password, enter a new one below. You will be logged in
            with your new password.
          </p>
          <form ref="resetPassword" className="reset-password" onSubmit={ this.handleSubmit }>
            <div className="form-group has-feedback">
              <input type="password" ref="newPassword" name="newPassword" className="form-control" placeholder="New Password"></input>
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" ref="repeatNewPassword" name="repeatNewPassword" className="form-control" placeholder="Repeat New Password"></input>
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <button type="submit" className="btn btn-primary btn-block btn-flat">Reset Password &amp; Login</button>
          </form>

          <a href="/login" className="text-center">I already have a membership</a><br></br>
          <a href="/register" className="text-center">Register a new membership</a>
        </div>
      </div>
    );
  },
});

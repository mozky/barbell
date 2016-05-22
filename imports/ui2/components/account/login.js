import React from 'react';
import { Link } from 'react-router';
import { handleLogin } from '../../../modules/login';

export const LoginBox = React.createClass({
  componentDidMount() {
    handleLogin({ component: this });
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
          <p className="login-box-msg">Sign up to enter barbell</p>
          <form ref="login" className="login" onSubmit={ this.handleSubmit }>
            <div className="form-group has-feedback">
              <input type="email" ref="emailAddress" name="emailAddress" className="form-control" placeholder="Email"></input>
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" ref="password" name="password" className="form-control" placeholder="Password"></input>
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="row">
              <div className="col-xs-8">
                <div className="checkbox icheck">
                  <label>
                    <input type="checkbox"></input> Remember me
                  </label>
                </div>
              </div>
              <div className="col-xs-4">
                <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
              </div>
            </div>
          </form>

          <div className="social-auth-links text-center">
            <p>- OR -</p>
            <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign in using Facebook</a>
            <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign in using Google+</a>
          </div>

          <a href="/recover-password">I forgot my password</a><br></br>
          <a href="/register" className="text-center">Register a new membership</a>
        </div>
      </div>
    );
  },
});

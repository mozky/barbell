import React from 'react';
import { handleSignup } from '../../modules/signup';

export const RegisterBox = React.createClass({
  componentDidMount() {
    handleSignup({ component: this });
  },

  handleSubmit(event) {
    event.preventDefault();
  },

  render() {
    return (
      <div className="register-box">
        <div className="register-logo">
          <a href="/"><b>Barbell</b>APP</a>
        </div>
        <div className="register-box-body">
          <p className="login-box-msg">Register to barbell</p>
          <form ref="signup" className="signup" onSubmit={ this.handleSubmit }>
            <div className="row">
              <div className="col-xs-6">
                <div className="form-group has-feedback">
                  <input type="text" ref="firstName" name="firstName" className="form-control" placeholder="First Name"></input>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="form-group has-feedback">
                <input type="text" ref="lastName" name="lastName" className="form-control" placeholder="Last Name"></input>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <div className="form-group has-feedback">
                  <input type="text" ref="username" name="username" className="form-control" placeholder="Username"></input>
                  <span className="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <div className="form-group has-feedback">
                  <input type="email" ref="emailAddress" name="emailAddress" className="form-control" placeholder="Email"></input>
                  <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <div className="form-group has-feedback">
                  <input type="password" ref="password" name="password" className="form-control" placeholder="Password"></input>
                  <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-8">
                <div className="checkbox icheck">
                  <label>
                    <input type="checkbox"></input> I agree to the <a href="#">terms</a>
                  </label>
                </div>
              </div>
              <div className="col-xs-4">
                <button type="submit" className="btn btn-primary btn-block btn-flat">Register</button>
              </div>
            </div>
          </form>

          <div className="social-auth-links text-center">
            <p>- OR -</p>
            <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign up using Facebook</a>
            <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign up using Google+</a>
          </div>

          <a href="/login" className="text-center">I already have a membership</a>
        </div>
      </div>
    );
  },
});

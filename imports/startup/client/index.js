import { Bert } from 'meteor/themeteorchef:bert';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './routes.js';

Bert.defaults = {
  hideDelay: 2500,
  // Accepts: a number in milliseconds.
  style: 'fixed-top',
  // Accepts: fixed-top, fixed-bottom, growl-top-left,   growl-top-right,
  // growl-bottom-left, growl-bottom-right.
  type: 'default',
  // Accepts: default, success, info, warning, danger.
};

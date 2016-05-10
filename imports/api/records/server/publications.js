import { Meteor } from 'meteor/meteor';
import { Records } from '../records';

Meteor.publish('records', () => Records.find());

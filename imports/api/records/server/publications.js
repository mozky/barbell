import { Records } from '../records';

Meteor.publish('records', () => Records.find());

import { composeWithTracker } from 'react-komposer';
import { Records } from '../../api/records/records.js';
import { RecordsList } from '../components/records-list.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('records');
  if (subscription.ready()) {
    const records = Records.find().fetch();
    onData(null, { records });
  }
};

export default composeWithTracker(composer, Loading)(RecordsList);

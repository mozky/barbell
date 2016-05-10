import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Records } from './records';

export const insertRecord = new ValidatedMethod({
  name: 'records.insert',
  validate: new SimpleSchema({
    username: { type: String },
    exercise: { type: String },
    weight: { type: Number },
    sets: { type: Number },
    reps: { type: Number },
    date: { type: Date },
  }).validator(),
  run(document) {
    Records.insert(document);
  },
});

export const updateRecord = new ValidatedMethod({
  name: 'records.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.username': { type: String, optional: true },
    'update.exercise': { type: String, optional: true },
    'update.weight': { type: Number, optional: true },
    'update.sets': { type: Number, optional: true },
    'update.reps': { type: Number, optional: true },
    'update.date': { type: Date, optional: true },
  }).validator(),
  run({ _id, update }) {
    Records.update(_id, { $set: update });
  },
});

export const removeRecord = new ValidatedMethod({
  name: 'records.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Records.remove(_id);
  },
});

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
    createdAt: { type: Date },
  }).validator(),
  run(document) {
    Records.insert(document);
  },
});

export const updateRecord = new ValidatedMethod({
  name: 'records.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.title': { type: String, optional: true },
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

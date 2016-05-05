import { Mongo } from 'meteor/mongo';
import faker from 'faker';

export const Records = new Mongo.Collection('Records');

Records.schema = new SimpleSchema({
  username: {
    type: String,
    label: 'Record username',
    max: 20,
    optional: false,
  },

  exercise: {
    type: String,
    label: 'Record exercise',
    max: 20,
    optional: false,
  },

  weight: {
    type: Number,
    label: 'Record weight',
    optional: false,
    decimal: true,
    min: 0,
  },

  sets: {
    type: Number,
    label: 'Record sets',
    optional: false,
    decimal: false,
    min: 0,
  },

  reps: {
    type: Number,
    label: 'Record reps',
    optional: false,
    decimal: false,
    min: 0,
  },

  date: {
    type: Date,
    optional: false,
    label: 'Record date',
  },

  createdAt: {
    type: Date,
    optional: false,
    label: 'Date created',
    defaultValue: new Date(),
  },
});

Records.attachSchema(Records.schema);

Factory.define('record', Records, {
  username: () => faker.internet.userName(),
  exercise: () => faker.lorem.word(),
  weight: () => faker.random.number(),
  sets: () => faker.random.number(),
  reps: () => faker.random.number(),
  date: () => faker.date.past(),
});

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { DateTimePicker } from './dateTimePicker.js';
import { Bert } from 'meteor/themeteorchef:bert';
import { insertRecord } from '../../api/records/methods.js';

export class AddRecord extends React.Component {

  handleSubmit(event) {
    // TODO: Remove usage of Number(), check Date value, month and day number exchanged
    event.preventDefault();
    const target = event.target;

    const record = {
      username: Meteor.user().username,
      exercise: target.formExercise.value,
      weight: Number(target.formWeight.value),
      sets: Number(target.formSets.value),
      reps: Number(target.formReps.value),
      date: new Date(target.formDate.value),
    };

    insertRecord.call(record, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        // TODO: RESET FORM
        Bert.alert('Record added!', 'success');
      }
    });
  }

  render() {
    return (
      <Form inline onSubmit={ this.handleSubmit }>
        <FormGroup controlId="formExercise">
          {/* <ControlLabel>Exercise</ControlLabel>
          {' '}*/}
          <FormControl componentClass="select" placeholder="Exercise">
            <option value="clean">Clean</option>
            <option value="snatch">Snatch</option>
            <option value="back squat">Back squat</option>
            <option value="deadlift">Dead lift</option>
            <option value="bench press">Bench press</option>
          </FormControl>
        </FormGroup>
        {' '}
        <FormGroup controlId="formWeight">
          {/* <ControlLabel>Weight</ControlLabel>
          {' '}*/}
          <FormControl type="number" placeholder="Weight" />
        </FormGroup>
        {' '}
        <FormGroup controlId="formSets">
          {/* <ControlLabel>Sets</ControlLabel>
          {' '}*/}
          <FormControl type="number" placeholder="Sets" />
        </FormGroup>
        {' '}
        <FormGroup controlId="formReps">
          {/* <ControlLabel>Reps</ControlLabel>
          {' '}*/}
          <FormControl type="number" placeholder="Reps" />
        </FormGroup>
        {' '}
        <DateTimePicker callbackParent={this.onChildChanged}/>
        {' '}
        <Button type="submit" >
          Add record
        </Button>
      </Form>
    );
  }
}

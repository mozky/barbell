import React from 'react';
import { Input } from 'react-bootstrap';
import { insertRecord } from '../../api/records/methods.js';

// TODO: Add a real form to insert record

const handleInsertRecord = (event) => {
  const target = event.target;
  const title = target.value.trim();

  if (title !== '' && event.keyCode === 13) {
    insertRecord.call({
      title,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        target.value = '';
        Bert.alert('Record added!', 'success');
      }
    });
  }
};

export const AddDocument = () => (
  <Input
    type="text"
    onKeyUp={ handleInsertRecord }
    placeholder="Type a document title and press enter..."
  />
);

import React from 'react';
import { Row, Col, ListGroupItem, Input, Button } from 'react-bootstrap';
import { updateRecord, removeRecord } from '../../api/records/methods.js';

const handleUpdateRecord = (recordId, event) => {
  const title = event.target.value.trim();
  if (title !== '' && event.keyCode === 13) {
    updateRecord.call({
      _id: recordId,
      update: { title },
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Record updated!', 'success');
      }
    });
  }
};

const handleRemoveRecord = (recordId, event) => {
  event.preventDefault();
  if (confirm('Are you sure? This is permanent.')) {
    removeRecord.call({
      _id: recordId,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Record removed!', 'success');
      }
    });
  }
};

export const Record = ({ record }) => (
  <ListGroupItem key={ record._id }>
    <Row>
      <Col xs={ 8 } sm={ 10 }>
        <Input
          type="text"
          standalone
          defaultValue={ record.username }
          onKeyUp={ handleUpdateRecord.bind(this, record._id) }
        />
      </Col>
      <Col xs={ 4 } sm={ 2 }>
        <Button
          bsStyle="danger"
          className="btn-block"
          onClick={ handleRemoveRecord.bind(this, record._id) }>
          Remove
        </Button>
      </Col>
    </Row>
  </ListGroupItem>
);

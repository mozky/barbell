import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Record } from './record.js';

export const RecordsList = ({ records }) => (
  records.length > 0 ? <ListGroup className="records-list">
    {records.map((rec) => (
      <Record key={ rec._id } record={ rec } />
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No records yet.</Alert>
);

RecordsList.propTypes = {
  records: React.PropTypes.array,
};

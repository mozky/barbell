import React from 'react';
import { Row, Col } from 'react-bootstrap';
import RecordsList from '../containers/records-list.js';
// import { AddRecord } from '../components/add-record.js';

export const Records = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Records</h4>
      {/*<AddRecord />*/}
      <RecordsList />
    </Col>
  </Row>
);

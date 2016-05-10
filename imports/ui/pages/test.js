import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { DateTimePicker } from '../components/dateTimePicker.js';

export const Test = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Test zone</h4>
      <DateTimePicker />
    </Col>
  </Row>
);

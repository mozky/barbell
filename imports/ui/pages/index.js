import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export const Index = () => (
  <Jumbotron className="text-center">
    <h2>Barbell</h2>
    <p>Lift and track.</p>
    <p><a className="btn btn-success" href="#" role="button">Add new record</a></p>
    <p style={ { fontSize: '16px', color: '#aaa' } }>Alpha 0.0.1</p>
  </Jumbotron>
);

import React from 'react';
import { Link } from 'react-router';
import { Jumbotron } from 'react-bootstrap';

export const Index = () => (
  <div className="content-wrapper">
    <Jumbotron className="text-center">
      <h2>Barbell</h2>
      <p>Lift and track.</p>
      <p><Link className="btn btn-success" to="/records" role="button">Add new record</Link></p>
      <p><Link className="btn btn-success" to="/documents" role="button">Add new document</Link></p>
      <p><Link className="btn btn-warning" to="/test" role="button">Test zone</Link></p>
      <p style={ { fontSize: '16px', color: '#aaa' } }>Alpha 0.0.1</p>
    </Jumbotron>
  </div>
);

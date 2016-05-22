import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DocumentsList from '../containers/documents-list.js';
import { AddDocument } from '../components/add-document.js';

export const Documents = React.createClass({
  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
            <h1>
              Documents<small> Document your shit</small>
            </h1>
        </section>

        <section className="content">
            <Row>
              <Col xs={ 12 }>
                 <AddDocument />
              </Col>
            </Row>
            <Row>
              <Col xs={ 12 }>
                 <DocumentsList />
              </Col>
            </Row>
        </section>
      </div>
    );
  },
});

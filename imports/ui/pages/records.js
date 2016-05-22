import React from 'react';
import { Row, Col } from 'react-bootstrap';
import RecordsList from '../containers/records-list.js';
import { AddRecord } from '../components/add-record.js';
import { Box } from '../components/box';


//TODO: Check if Row works instead of cassName="row"

export const Records = React.createClass({
  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
            <h1>
              Records<small> Track your shit</small>
            </h1>
        </section>

        <section className="content">
            <div className="row">
              <AddRecord />
            </div>
            <div className="row">
              {/*<Box title="Records list" width="12" theme="box-default"
                border={false} content={ RecordsList } footer="footer"/>*/}
              <RecordsList />
            </div>
        </section>
      </div>
    );
  },
});

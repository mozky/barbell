import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Alert } from 'react-bootstrap';
// import { Record } from './record.js';
//
// export const RecordsList = ({ records }) => (
//   records.length > 0 ? <ListGroup className="records-list">
//     {records.map((rec) => (
//       <Record key={ rec._id } record={ rec } />
//     ))}
//   </ListGroup> :
//   <Alert bsStyle="warning">No records yet.</Alert>
// );
//
// RecordsList.propTypes = {
//   records: React.PropTypes.array,
// };
export const RecordsList = ({ records }) => (

  records.length <= 0 ? <Alert bsStyle="warning">No records yet!</Alert> :
  <BootstrapTable data={records} striped={true} hover={true}>
    <TableHeaderColumn isKey={true} dataField="username">Username</TableHeaderColumn>
    <TableHeaderColumn dataField="exercise">Exercise</TableHeaderColumn>
    <TableHeaderColumn dataField="weight" width="70">Weight</TableHeaderColumn>
    <TableHeaderColumn dataField="sets" width="50">Sets</TableHeaderColumn>
    <TableHeaderColumn dataField="reps" width="50">Reps</TableHeaderColumn>
    {/* <TableHeaderColumn dataField="date">Record date</TableHeaderColumn>
    <TableHeaderColumn dataField="createdAt">Created</TableHeaderColumn> */}
  </BootstrapTable>
);

RecordsList.propTypes = {
  records: React.PropTypes.array,
};

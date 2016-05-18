import React from 'react';

export class UserPage extends React.Component {
  render() {
    return <h3>Message {this.props.params.username }</h3>;
  }
}

UserPage.propTypes = {
  params: React.PropTypes.object.isRequired,
};

import React from 'react';

export class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.name,
    };
  }
  render() {
    return (
      <div className="content-wrapper">
        <h1>Hi {this.state.username}</h1>
      </div>
    );
  }
}
Index.propTypes = { name: React.PropTypes.string };
Index.defaultProps = { name: 'usuario' };

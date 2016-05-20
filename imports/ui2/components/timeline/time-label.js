import React from 'react';

export const TimeLabel = React.createClass({
  getDefaultProps() {
    return {
      theme: 'bg-red',
      content: 'Default content',
    };
  },
  render() {
    return (
      <li className="time-label">
          <span className={this.props.theme}>
              {this.props.content}
          </span>
      </li>
    );
  },
});

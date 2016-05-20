import React from 'react';

export const TimelineHeader = React.createClass({
  render() {
    return (
      <h3 className="timeline-header">
        <a href={this.props.url} target="_blank">{this.props.title}</a>
        {this.props.content}
        {this.props.children}
      </h3>
    );
  },
});

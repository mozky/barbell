import React from 'react';

export const TimelineBody = React.createClass({
  getDefaultProps() {
    return {
      content: 'Sample content',
    };
  },
  render() {
    return (
          <div className="timeline-body">
              {this.props.content}
              {this.props.children}
          </div>
    );
  },
});

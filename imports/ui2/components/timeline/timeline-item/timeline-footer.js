import React from 'react';

export const TimelineFooter = React.createClass({
  render() {
    return (
      <div className="timeline-footer">
        {this.props.content}
        {this.props.children}
      </div>
    );
  },
});

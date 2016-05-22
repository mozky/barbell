import React from 'react';

export const Comment = React.createClass({
  getDefaultProps() {
    return {
      content: 'sample comment',
      displayName: 'John Doe',
      displayPicture: '/img/user4-128x128.jpg',
      date: '4:20 PM Today',
    };
  },
  render() {
    return (
      <div className="box-comment">
          {/* User image */}
          <img className="img-circle img-sm" src={this.props.displayPicture} alt="user image" />
          <div className="comment-text">
              <span className="username">
                  {this.props.displayName}
                  <span className="text-muted pull-right">{this.props.date}</span>
              </span>
              {/* /.username */}
              {this.props.content}
          </div>
          {/* /.comment-text */}
      </div>
    );
  },
});

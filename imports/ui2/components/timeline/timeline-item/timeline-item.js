import React from 'react';
import { TimelineHeader } from './timeline-header';
import { TimelineBody } from './timeline-body';
import { TimelineFooter } from './timeline-footer';

export const TimelineItem = React.createClass({
  getDefaultProps() {
    return {
      icon: 'fa fa-coffee',
      iconTheme: 'bg-blue',
      time: '',
    };
  },
  render() {
    let body = '';
    let footer = '';
    if (this.props.body) {
      body = <TimelineBody content={this.props.body.content} >
                {this.props.body.markup}
              </TimelineBody>;
    }

    if (this.props.footer) {
      footer = <TimelineFooter content={this.props.footer.content} >
                {this.props.footer.markup}
              </TimelineFooter>;
    }

    return (
      <li>
          <i className={this.props.icon+" "+ this.props.iconTheme}></i>

          <div className="timeline-item">
              <span className="time">
                <i className="fa fa-clock-o"></i>
                {this.props.time}
              </span>

              <TimelineHeader url={this.props.header.url} title={this.props.header.title} content={this.props.header.content} />

              {body}

              {footer}
          </div>
      </li>
    );
  },
});

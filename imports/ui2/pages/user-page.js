import React from 'react';
import { Timeline } from '../components/timeline/timeline';

export const UserPage = React.createClass({
  getInitialState() {
    return {
      timelineInfo: [],
    };
  },
  componentDidMount() {
    const timelineInfo = [
      {
        startDate: '10 Feb. 2014',
        endDate: '3 Jan. 2014',
        items: [
          {
            icon: 'fa fa-envelope',
            iconTheme: 'bg-blue',
            time: ' 12:05',
            header: {
              url: '#',
              title: 'Support Team ',
              content: 'sent you an email',
            },
            body: {
              content: 'Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...',
            },
            footer: {
              content: '',
              markup: [
                <a key="1" className="btn btn-primary btn-xs">Read more</a>,
                <a key="2" className="btn btn-danger btn-xs">Delete</a>,
              ],
            },
          },
          {
            icon: 'fa fa-user',
            iconTheme: 'bg-aqua',
            time: ' 5 mins ago',
            header: {
              url: '#',
              title: 'Sarah Young ',
              content: 'accepted your friend request',
            },
          },
          {
            icon: 'fa fa-comments',
            iconTheme: 'bg-yellow',
            time: ' 27 mins ago',
            header: {
              url: '#',
              title: 'Jay White ',
              content: 'commented on your post',
            },
            body: {
                content: 'Take me to your leader! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood!',
            },
            footer: {
              content: '',
              markup: <a className="btn btn-warning btn-flat btn-xs">View comment</a>,
            },
          },
        ],
      },
      {
        items: [
          {
            icon: 'fa fa-camera',
            iconTheme: 'bg-purple',
            time: ' 2 days ago',
            header: {
              url: '#',
              title: 'Mina Lee ',
              content: 'uploaded new photos',
            },
            body: {
              content: '',
              markup: [
                <img key="1" src="http://placehold.it/150x100" alt="..." className="margin" />,
                <img key="2" src="http://placehold.it/150x100" alt="..." className="margin" />,
                <img key="3" src="http://placehold.it/150x100" alt="..." className="margin" />,
                <img key="4" src="http://placehold.it/150x100" alt="..." className="margin" />,
              ],
            },
          },
          {
            icon: 'fa fa-video-camera',
            iconTheme: 'bg-maroon',
            time: ' 5 days ago',
            header: {
              url: '#',
              title: 'Mr. Doe ',
              content: 'shared a video',
            },
            body: {
              content: '',
              markup: <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/tMWkeBIohBs" frameBorder="0" allowFullScreen="">
                  </iframe>
              </div>,
            },
            footer: {
              content: '',
              markup: <a href="#" className="btn btn-xs bg-maroon">See comments</a>,
            },
          },
        ],
      },
    ];

    this.setState({
      timelineInfo,
    });
  },
  render() {
    return (
      <div>
        <section className="content-header">
            <h1>
              {this.props.params.username }'s Timeline
                <small>example</small>
            </h1>
        </section>

        <section className="content">
            <div className="row">
                <Timeline timelineInfo={this.state.timelineInfo}/>
            </div>

        </section>
      </div>
    );
  },
});

// UserPage.propTypes = {
//   params: React.PropTypes.object.isRequired,
// };

import React from 'react';
import { ControlPanel } from '../components/control-panel';
import { StatTile } from '../components/stat-tile';
import { Post } from '../components/post/post';
import { Box } from '../components/box';

export const Test = React.createClass({
  getInitialState() {
    return {
      postOptions: [],
      statTileOptions: [],
    };
  },
  componentDidMount() {
    const postOptions = [
      {
        displayName: 'Jonathan Burke Jr.',
        displayPicture: '/img/user1-128x128.jpg',
        date: 'Shared publicly - 7:30 PM Today',
        postPicture: '/img/photo2.png',
        content: 'I took this photo this morning. What do you guys think?',
        socialInfo: '127 likes - 3 comments',
        comments: [
          {
            displayName: 'Maria Gonzales',
            displayPicture: '/img/user3-128x128.jpg',
            date: '8:03 PM Today',
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          }, {
            displayName: 'Luna Stark',
            displayPicture: '/img/user4-128x128.jpg',
            date: '8:03 PM Today',
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          },
        ],
      },
    ];

    const statTileOptions = [{
      theme: 'bg-aqua',
      icon: 'fa-shopping-cart',
      subject: 'New Orders',
      stats: '150',
      link: '#',
    }, {
      theme: 'bg-green',
      icon: 'ion-stats-bars',
      subject: 'Bounce Rate',
      stats: '53%',
      link: '#',
    }, {
      theme: 'bg-yellow',
      icon: 'ion-person-add',
      subject: 'User Registrations',
      stats: '44',
      link: '#',
    }, {
      theme: 'bg-red',
      icon: 'ion-pie-graph',
      subject: 'Unique Visitors',
      stats: '65',
      link: '#',
    }];

    this.setState({
      postOptions,
      statTileOptions,
    });
  },
  render() {
    const statTileWidgets = this.state.statTileOptions.map(function (options, iterator) {
      return (
        <StatTile
            key={'widget' + iterator}
            width = {3}
            icon = {options.icon}
            link = {options.link}
            stats = {options.stats}
            subject = {options.subject}
            theme = {options.theme} />
      );
    });

    const posts = this.state.postOptions.map(function (options, iterator) {
      return (
        <Post
            key={'post' + iterator}
            width={12}
            displayName={options.displayName}
            displayPicture={options.displayPicture}
            date={options.date}
            postPicture={options.postPicture}
            content={options.content}
            attachments={options.attachments}
            comments={options.comments} >

            {/* <SocialButton type='like' />
            <SocialButton type='share' />
            <SocialInfo info={options.socialInfo} /> */}
        </Post>
      );
    });

    return (
      <div>
        <section className="content-header">
          <h1>
            Dashboard
            <small>Control panel</small>
          </h1>
          {/* <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li className="active">Dashboard</li>
          </ol> */}
          <ControlPanel />
        </section>

        <section className="content">
          <div className="row">
            {statTileWidgets}
          </div>
          <div className="row">
            {posts}
          </div>
          <div className="row">
            <Box title="Sample Box" width="12" theme="box-default"
              border={false} content="Sample Content" footer="footer"/>
          </div>
        </section>
      </div>
    );
  },
});

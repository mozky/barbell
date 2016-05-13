import React from 'react';
import { Comment } from './comment';
import { Attachment } from './attachment';

export const Post = React.createClass({
  getDefaultProps() {
    return {
      displayName: 'JohnDoe',
      description: 'My profile description',
      displayPicture: './128x128.jpg',
    };
  },
  render() {
    let postPicture = '';
    let attachments = [];
    let comments = [];

    if (this.props.postPicture) {
      postPicture = <img className="img-responsive pad" src={this.props.postPicture} alt="Photo" />;
    }

    if (this.props.attachments) {
      attachments = this.props.attachments.map(function(attachmentDetails, iterator) {
        return (
          <Attachment key={iterator}
            title={attachmentDetails.title}
            picture={attachmentDetails.picture}
            link={attachmentDetails.link}
            content={attachmentDetails.content} />
        );
      });
    }

    if (this.props.comments) {
      comments = this.props.comments.map(function(commentDetails, iterator) {
        return (
          <Comment key={iterator}
            displayName={commentDetails.displayName}
            displayPicture={commentDetails.displayPicture}
            date={commentDetails.date}
            content={commentDetails.content} />
        );
      });
    }

    return (
      <div className={"col-md-"+this.props.width}>
        <div className="box box-widget">
          <div className="box-header with-border">
            <div className="user-block">
              <img className="img-circle" src={this.props.displayPicture} alt="user image" />
              <span className="username">
                  <a href="#">{this.props.displayName}</a>
              </span>
              <span className="description">{this.props.date}</span>
            </div>
            {/* /.user-block */}
          </div>
          {/* /.box-header */}
          <div className="box-body">
            {postPicture}
            <p>{this.props.content}</p>
            {attachments}
          </div>
          {/* /.box-body */}
          <div className="box-footer box-comments">
              {comments}
              {/* /.box-comment */}
          </div>
          {/* /.box-footer */}
          <div className="box-footer">
            <form action="#" method="post">
              <img className="img-responsive img-circle img-sm" src="../dist/img/user4-128x128.jpg" alt="alt text" />
              {/* .img-push is used to add margin to elements next to floating images */}
              <div className="img-push">
                <input type="text" className="form-control input-sm" placeholder="Press enter to post comment" />
              </div>
            </form>
          </div>
          {/* /.box-footer */}
        </div>
      </div>
    );
  },
});

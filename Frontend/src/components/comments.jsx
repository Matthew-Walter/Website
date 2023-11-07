import React, { Component } from "react";
import Comment from "./comment";
import "./comments.css";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null, isLoaded: false, comments: [] };
  }

  componentDidMount() {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ isLoaded: true, comments: result.data });
        },

        (error) => {
          this.setState({ isLoaded: true, error });
        }
      );
  }

  render() {
    const { error, isLoaded, comments } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          <div className="wrapperDiv">
            {comments?.map((comment) => (
              <div className="commentDiv">
                <div className="pfpDiv">
                  <a href={comment.authorChannelUrl}>
                    <img
                      className="profilePicture"
                      src={comment.authorProfileImageUrl}
                      alt={require("./defaultpfp.jpg")}
                    />
                  </a>
                </div>
                <Comment
                  key={comment.commentId}
                  threadEtag={comment.threadEtag}
                  threadId={comment.threadId}
                  commentEtag={comment.commentEtag}
                  commentId={comment.commentId}
                  channelId={comment.channelId}
                  videoId={comment.videoId}
                  textDisplay={comment.textDisplay}
                  textOriginal={comment.textOriginal}
                  authorDisplayName={comment.authorDisplayName}
                  authorProfileImageUrl={comment.authorProfileImageUrl}
                  authorChannelUrl={comment.authorChannelUrl}
                  authorChannelId={comment.authorChannelId}
                  canRate={comment.canRate}
                  viewerRating={comment.viewerRating}
                  likeCount={comment.likeCount}
                  publishedAt={comment.publishedAt}
                  updatedAt={comment.updatedAt}
                  canReply={comment.canReply}
                  totalReplyCount={comment.totalReplyCount}
                  isPublic={comment.isPublic}
                ></Comment>
              </div>
            ))}
          </div>
        </ul>
      );
    }
  }
}

export default Comments;

import React, { Component } from "react";
import { getOverlayDirection } from "react-bootstrap/esm/helpers";
import "./comments.css";
import likeCount from "./commentSubParts/likeCount";

class Comment extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div>
            <a className="userName" href={this.props.authorChannelUrl}>
              {this.props.authorDisplayName}
            </a>
          </div>
          <p className="commentText">{this.props.textOriginal}</p>
          <div>
            <likeCount likeCount={this.props.likeCount} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Comment;

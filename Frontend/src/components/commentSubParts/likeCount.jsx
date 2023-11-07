import React, { Component } from "react";
import "./commentSubParts.css";

class likeCount extends Component {
  render() {
    return (
      <div>
        <img src="./thumbsUp" alt="" />
        <p>{this.props.likeCount}</p>
      </div>
    );
  }
}

export default likeCount;

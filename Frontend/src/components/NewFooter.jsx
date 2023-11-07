import "./comments.css";
import React, { Component } from "react";

class NewFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="contactInfoWrapperDiv">
          <h1 className="getInContact">Get in Contact</h1>
          <div className="margin">
            <div className="flex">
              <a href="mailto:mpwalter1998@gmail.com">
                <p className="contactInfo">Email</p>
              </a>
              <a href="https://www.linkedin.com/in/matthew-walter-ba67b027a/">
                <p className="contactInfo">LinkedIn</p>
              </a>
              <a href="https://www.discordapp.com/users/128680995657482240">
                <p className="contactInfo">Discord</p>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NewFooter;

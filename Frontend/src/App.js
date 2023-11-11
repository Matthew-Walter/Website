import React, { Component } from "react";
import "./App.css";
import Comments from "./components/comments";
import "./components/comments.css";
import NewFooter from "./components/NewFooter";

class App extends Component {
  render() {
    console.log("App - Rendered");
    const CRYSTAL_ENGINE_URL = "http://localhost:3000/CrystalEngine.zip";
    const downloadFileAtURL = (url) => {
      const fileName = url.split("/").pop();
      const aTag = document.createElement("a");
      aTag.href = url;
      aTag.setAttribute("download", fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    };

    return (
      <React.Fragment>
        <div></div>

        <div className="mainWrapperDiv">
          <h1 className="yo">yo</h1>
          <div className="introWrapper">
            <p className="introductionText">
              I'm Matthew Walter, a recent Computer Science graduate from Rowan
              University. All of the code for this website was written by hand
              by me using python flask and React, and runs on an AWS EC2
              instance. No AI or website builing service required. Graphic
              design isn't my strong suit, Back end design is my strength, but
              if I have help deciding how a website should look I can build it.
              I've done work building games in Unity, and while it's mostly
              unrelated I have a youtube channel that I work on in my spare
              time. There are a few displays of things that I've worked on down
              below, and links to various ways to contact me at the bottom of
              the page.
            </p>
          </div>
        </div>
        <div className="div1">
          <p className="introductionText">
            <a href="https://www.youtube.com/channel/UCLNnaOkDN_hqO9W6GGysUyA">
              This{" "}
            </a>
            is a link to my YouTube channel. While it's not Computer Science
            related, it should hopefully still show that I can work dilligently
            on my own if needed.
          </p>
          <a href="https://www.youtube.com/channel/UCLNnaOkDN_hqO9W6GGysUyA">
            <img src={require("./Youtubepfp.png")} className="youtubepfp"></img>
          </a>

          {/* <div className="container">
            <div className="commentWrapperDiv">
              <Comments></Comments>
            </div>
          </div> */}
        </div>
        <div className="div2">
          <p className="introductionText">
            <a href="https://github.com/Matthew-Walter?tab=overview&from=2022-12-01&to=2022-12-31">
              Here
            </a>{" "}
            is a link to my github profile. most of my history is on
            <a href="https://github.com/joshfigueroa/Rent4Hire"> this</a>{" "}
            project, but it definitely gave me a firm understanding of how to
            use pulls, branches, merges, and work with a team.
          </p>
          <a href="https://github.com/Matthew-Walter?tab=overview&from=2022-12-01&to=2022-12-31">
            <img className="githublogo" src={require("./githublogo.jpg")}></img>
          </a>
        </div>
        <div className="div3">
          <p className="introductionText">
            This is a demo I made with some friends for a Unity class my senior
            year. All the code was written in C#.
          </p>
          <div className="downloadButtonDiv">
            <button
              className="downloadButton"
              onClick={() => {
                downloadFileAtURL(CRYSTAL_ENGINE_URL);
              }}
            >
              Download Game
            </button>
          </div>
          <img
            className="crystalenginelogo"
            src={require("./CrystalEngine.jpg")}
          ></img>
        </div>
        <div>
          <NewFooter></NewFooter>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

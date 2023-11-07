import NavBar from "./components/navbar";
import React, { Component } from "react";
import Comments from "./components/comments";

export class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 7 },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterID) => {
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <div className="mainWrapperDiv">
          <h1 className="wavy">yo</h1>
          <div className="introWrapper">
            <p className="introductionText">
              I'm Matthew Walter, a recent Computer Science grad from Rowan
              University. All of the code for this website was written by hand
              by me using python flask and React, no AI or website builing
              service required. As you can probably tell, graphic design isn't
              something I'm great at. Back end design is my strong suit, but I
              am capable of coding the website if given a design to base it off
              of. I've done work building games in Unity, and while it's mostly
              unrelated I have a youtube channel that I work on in my spare
              time. There are a few displays of things that I've worked on down
              below, and links to various ways to contact me at the bottom of
              the page.
            </p>
          </div>
          <div className="container">
            <div className="commentWrapperDiv">
              <Comments></Comments>
            </div>
          </div>
        </div>
        <newFooter></newFooter>
      </React.Fragment>
    );
  }
}

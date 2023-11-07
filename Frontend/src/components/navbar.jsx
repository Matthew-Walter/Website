import React, { Component } from "react";

//stateless functional component

const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <ul>
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
        <a
          className="navbar-brand"
          href="https://www.linkedin.com/in/matthew-walter-ba67b027a/"
        >
          LinkedIn
        </a>
        <a
          className="navbar-brand"
          href="https://www.youtube.com/channel/UCLNnaOkDN_hqO9W6GGysUyA"
        >
          {" "}
          Youtube
        </a>
      </ul>
    </nav>
  );
};

export default NavBar;

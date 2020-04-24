import React, { Component, Fragment } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default class NavbarVacio extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar fixed-top navbar-dark bg-dark">
          <a className="navbar-brand" href="/home/:id">
            Blackboard
          </a>
        </nav>       
      </Fragment>
    );
  }
}

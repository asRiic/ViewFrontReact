import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar fixed-bottom navbar-dark bg-dark">
          <Link className="navbar-brand" to="#">
            Fixed bottom
          </Link>
        </nav>
      </Fragment>
    );
  }
}

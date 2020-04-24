import React, { Component, Fragment } from "react";
import axios from "axios";

import NavbarVacio from "./NavbarVacio";
import Footer from "./Footer";

export default class CreateUserr extends Component {
  state = {
    users: [],
    username: "",
    password: "",
    email: "",
    numTel: ""
  };

  onChangeUser = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      numTel: this.state.numTel
    };
    await axios.post("http://localhost:4000/users", newUser);
  };

  render() {
    return (
      <Fragment>
        <NavbarVacio />

        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h3>Registrar Usuario</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Usuario"
                        name="username"
                        onChange={this.onChangeUser}
                        value={this.state.username}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Contraseña"
                        name="password"
                        onChange={this.onChangeUser}
                        value={this.state.password}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="Email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        onChange={this.onChangeUser}
                        value={this.state.email}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Numero de telefono"
                        name="numTel"
                        onChange={this.onChangeUser}
                        value={this.state.numTel}
                      />
                    </div>
                  
                    <button type="submit" className="btn btn-success">
                      Registrarse
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />

      </Fragment>
    );
  }
}

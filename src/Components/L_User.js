import React, { Component, Fragment } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import NavbarHome from "./NavbarHome";

export default class CreateUser extends Component {
  state = {
    users: [],
    username: "",
    password: "",
  };

  componentDidMount() {
    this.getusers();
  }

  getusers = async () => {
    const res = await axios.get("http://localhost:4000/users");
    this.setState({ users: res.data });
  };

  onChangeUser = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  
  deleteUser = async (id) => {
    await axios.delete("http://localhost:4000/users/" + id);
    this.getusers();
  };

  renderTableuser() {
    return this.state.users.map((_us, index) => {
      const { _id, username, password, email, numTel } = _us;
      return (
        <tr key={_id}>
          <td>{username}</td>
          <td>{password}</td>
          <td>{email}</td>
          <td>{numTel}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.deleteUser(_us._id)}
            >
              Borrar
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <Fragment>
        <NavbarHome/>
        
        <div className="row">
          <div className="col">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Usuario</th>
                  <th>Contraseña</th>
                  <th>Email</th>
                  <th>Telefono</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>{this.renderTableuser()}</tbody>
            </Table>
          </div>
        </div>
      </Fragment>
    );
  }
}

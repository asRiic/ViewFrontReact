import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";


export default class PlantillaHome extends Component {
  render() {
   
    return (
      <Fragment>
        <div id="content-wrapper" class="d-flex">
          <div id="sidebar-container" className="bg-light border-right">
            <div className="row logo">
              <div class=" col-2 circle rounded-circle d-flex align-self-center ">
                <ion-icon
                  class="align-self-center mx-auto lead"
                  name="bicycle-outline"
                ></ion-icon>
              </div>

              <div className="col-10">
                <h5 class="md-0">2055</h5>
                <small class="text-muted">Registros totales</small>
              </div>
            </div>

            <div className="menu list-group-flush">
              <Link
                className="list-group-item list-group-item-action bg-light"
                to="#"
              >
                <ion-icon name="speedometer-outline" /> Recorridos
              </Link>

              <Link
                className="list-group-item list-group-item-action bg-light"
                to="#"
              >
                <ion-icon name="people-outline" /> Usuarios
              </Link>

              <Link
                className="list-group-item list-group-item-action bg-light"
                to="#"
              >
                <ion-icon name="stats-chart-outline" /> Estadisticas Usuarios
              </Link>

              <Link
                className="list-group-item list-group-item-action bg-light"
                to="#"
              >
                <ion-icon name="construct-outline" /> Configuracion
              </Link>
            </div>
          </div>

          <div id="page-container" className="w-100">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <botton
                id="menu-toggle"
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
              >
                <span class="navbar-toggler-icon"></span>
              </botton>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="#">
                      <ion-icon name="person-circle-outline" />
                      Perfil
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <ion-icon name="alert-circle-outline" />
                      Opciones
                    </Link>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <Link className="dropdown-item" to="#">
                        <ion-icon name="hammer-outline"></ion-icon> Herramientas
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="#">
                        <ion-icon name="log-out-outline"></ion-icon> Salir
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="content-middle container-fluid p-5">
              {/*Aca se puede poner el contenido del la pagia*/}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

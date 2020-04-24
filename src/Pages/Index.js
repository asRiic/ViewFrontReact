import React, { Component, Fragment } from "react";
import NavbarVacio from "../Components/NavbarVacio";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <NavbarVacio />
        <div className="container-md ">
          <div className="row align-items-center">
            <div className="col align-self-center">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="card text-center">
                    <div className="card-header">Featured</div>
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      
                    </div>
                    <div className="card-footer text-muted">2 days ago</div>
                  </div>
                </div>

                <div className="col-6 col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <form>
                        <div className="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Usuario"
                          />
                        </div>

                        <div class="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                          />
                        </div>

                        <button type="submit" className="btn btn-primary">
                          Entrar
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

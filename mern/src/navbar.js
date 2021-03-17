import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Amz
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My Account
                </a>
              </li>
            </ul>
          </div>
        </nav>
        
      </div>

      
    );
  }
}

export default Navbar;

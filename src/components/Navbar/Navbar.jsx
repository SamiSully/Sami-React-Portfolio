import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">Sami</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
      <Link className="nav-link" to="./"> Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="./contact">Contact</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="./portfolio">Portfolio</Link>
      </li>
    </ul>
  </div>
</nav>
    );
}

export default Navbar;
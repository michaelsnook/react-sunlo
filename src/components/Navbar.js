import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom'

const Navbar = () => (
  <nav className="bg-dark text-white">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to={`/`} className="navbar-brand">Sunlo</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to={`/profile`} className="nav-item nav-link active">Profile</Link>
            <Link to={`/deck/Hindi`} className="nav-item nav-link active">Hindi</Link>
          </div>
        </div>
      </nav>
    </div>
  </nav>
);

export default Navbar;

import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleShow = (e) => {
    this.setState(state => ({
      open: !this.state.open
    }));
    e.preventDefault();
  }

  closeNav = () => {
    this.setState(state => ({
      open: false
    }));
  }

  render() {
    return (
      <nav className="bg-primary text-white">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="/" onClick={this.toggleShow}
              data-toggle="collapse"
              aria-controls="navbarNavAltMarkup"
              aria-expanded={this.state.open}
              aria-label={`Menu ${this.state.open? 'close' : 'open'}`}
            >
              <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
              </button>
              <span className="navbar-brand ml-3">Sunlo</span>
            </a>
            <div className={`navbar-collapse  ${this.state.open? '' : 'collapse'}`} id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link onClick={this.closeNav} to={`/`} className="nav-item nav-link">
                  <i className="fas fa-home col-2"></i> Sunlo home
                </Link>
                <Link onClick={this.closeNav} to={`/profile`} className="nav-item nav-link">
                  <i className="fas fa-user-circle col-2"></i> Profile
                </Link>
                <Link onClick={this.closeNav} to={`/deck/Hindi`} className="nav-item nav-link">
                  <i className="fas fa-database col-2"></i> Your Hindi deck
                </Link>
                <Link onClick={this.closeNav} to={`/browse/Hindi`} className="nav-item nav-link">
                  <i className="fas fa-database col-2"></i> Browe Hindi phrases
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    );
  }
}

export default Navbar;

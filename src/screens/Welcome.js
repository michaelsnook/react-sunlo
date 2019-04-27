import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  render() {
    return (
      <div className="bg-primary w-100 text-light">
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <h1>Sunlo is a social<br />language learning app</h1>
              <br />
              <p>Create your own flash cards, or pick from a crowd-sourced pool.</p>
              <p>The phrase-based approach is meant for people who are immersed enough
              in the new language that you have friends, colleagues, and family who can
              help you learn new words and phrases that are useful from day one.</p>
              <p>
                (This is not a company, just an app. It's open source and free to use.
                If you like to code and want to help,
                <a className="text-white font-weight-bold" href="//github.com/michaelsnook/react-sunlo"> come have a look</a>
                .)
              </p>
            </div>
            <div className="col-md-4 p-5">
              <div className="card text-dark">
                <div className="card-header">
                  Demo Links
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><Link to={`/profile`}>A sample profile</Link></li>
                  <li className="list-group-item"><Link to={`/deck/Hindi`}>A Hindi deck</Link></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Welcome;


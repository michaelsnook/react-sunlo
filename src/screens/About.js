import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
        <div className="container pt-3 pb-5">
          <h2>About Sunlo</h2>
          <div className="row">
            <div className="col">
              <p><em>
                NB: This version of the app is just a prototype. Everything is
                read-only and for demo purposes only.
              </em></p>
              <p>
                Found a bug? Looking for a new feature? Want to help set priorities
                for new features and offer your own ideas? <a href="http://slack.sunlo.co/">Join me on Slack
                </a> and tell me about it.
              </p>
              <p>
                Or, if you're on GitHub, come on over to the <a href="https://github.com/michaelsnook/react-sunlo">GitHub repo</a>.
                You can <a href="https://github.com/michaelsnook/react-sunlo/issues">
                file a bug</a> or feature request directly.</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Welcome;


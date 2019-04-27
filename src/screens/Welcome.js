import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  render() {
    return(
      <div className="container py-5">
        <h1>Sunlo is a social<br />language learning app</h1>
        <br />
        <p>Create your own flash cards, or pick from a crowd-sourced pool.</p>
        <p>The phrase-based approach is meant for people who are immersed enough
        in the new language that you have friends, colleagues, and family who can
        help you learn new words and phrases that are useful from day one.</p>
        <p>(This is not a company, just an app. It's open source and free to use.
          If you like to code and want to help with the app,
          <a href="https://github.com/michaelsnook/sunlo"> come have a look.</a>)</p>
      </div>
    );
  }
}

export default Welcome;


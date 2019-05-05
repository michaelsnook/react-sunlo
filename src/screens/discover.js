import React, { Component } from 'react';
import AddPhraseButton from '../components/add-phrase-button';

class Discover extends Component {
  render() {
    return (
      <div className="container p-3 d-flex text-center align-items-center">
        <div className="row">
          <div className="col-12">
            <h1 className="text-muted">It looks like you're all out of new phrases to learn.</h1>
          </div>
          <div className="col-12 pt-3">
            <AddPhraseButton />
          </div>
        </div>
      </div>
    )
  }
}

export default Discover;

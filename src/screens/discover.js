import React, { Component } from 'react';

import Settings from '../settings';

import AddPhraseButton from '../components/add-phrase-button';
import Modal from '../components/modal';

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrases: [],
    }
  }

  componentDidMount() {
    fetch(Settings.API_URL + 'Phrases?api_key=' + Settings.API_KEY
        + '&view=discover_' + this.props.language)
      .then((resp) => resp.json())
      .then(data => {
        this.setState({ phrases: data.records });
      }).catch(err => {
        // Error 🙁
      });
  }

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

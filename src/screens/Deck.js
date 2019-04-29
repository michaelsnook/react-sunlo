import React, { Component } from 'react';

import DeckItem from '../components/DeckItem';

import Settings from '../Settings';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrases: []
    };
  }

  componentDidMount() {
    fetch(Settings.API_URL + 'Phrases?api_key=' + Settings.API_KEY
        + '&view=deck_' + this.props.language.toLowerCase())
      .then((resp) => resp.json())
      .then(data => {
        this.setState({ phrases: data.records })
      }).catch(err => {
        // Error 🙁
      });
  }

  render() {
    return (
      <div className="container p-3">
        <h2>Your {this.props.language} Deck</h2>
        <div className="row p-3">
        {this.state.phrases.map(phrase =>
          <DeckItem key={phrase.id} phrase={phrase} />
        )}
        </div>
      </div>
    );
  }
}

export default Deck;


import React, { Component } from 'react';

import Settings from '../settings';
import DeckItem from '../components/deck-item';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrases: {}
    };
  }

  componentDidMount() {
    fetch(Settings.API_URL + 'Phrases?api_key=' + Settings.API_KEY
        + '&view=deck_' + this.props.language.toLowerCase())
      .then((resp) => resp.json())
      .then(data => {
        let phrases = {};
        data.records.map(p => { phrases[p.id] = p })
        this.setState({ phrases: phrases })
      }).catch(err => {
        // Error 🙁
      });
  }

  renderPhrases() {
    let items = [];
    for (let key in this.state.phrases) {
      const phrase = this.state.phrases[key];
      items.push(<DeckItem key={`deck-item-${key}`} phrase={phrase} />)
    }
    return items;
  }

  render() {
    return (
      <div className="container p-3">
        <h2>Your {this.props.language} Deck</h2>
        <div className="row p-3">
        {this.renderPhrases()}
        </div>
      </div>
    );
  }
}

export default Deck;


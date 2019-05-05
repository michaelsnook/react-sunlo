import React, { Component } from 'react';

import Settings from '../settings';
import DeckItem from '../components/deck-item';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrases: {},
    };
  }

  componentDidMount() {
    fetch(Settings.API_URL + 'Phrases?api_key=' + Settings.API_KEY
        + '&view=deck_' + this.props.language.toLowerCase())
      .then((resp) => resp.json())
      .then(data => {
        let phrases = {};
        window.records = data.records;
        data.records.map(p => { phrases[p.id] = p })
        this.setState({ phrases: phrases })
        window.phrases = this.state.phrases;
      }).catch(err => {
        // Error 🙁
      });
  }

  addANode = (e) => {
    console.log(e, this);
    let phrases = this.state.phrases;
    let phrase = phrases['rec7g7UeW1THoQDoK'];
    phrases[1] = phrase;
    this.setState({phrases: phrases});
    console.log('pushed');
    console.log(this);
    e.preventDefault();
  }

  handleStatusChange(uuid, status) {
    var phrases = {...this.state.phrases}
    console.log('state', this.state.phrases[uuid]);
    phrases[uuid].fields.status = status;
    console.log('new', phrases[uuid]);
    this.setState({phrases: phrases});
    console.log('update');
  }

  render() {
    return (
      <div className="container p-3">
        <h2>Your {this.props.language} Deck</h2>
        <button onClick={this.addANode}>Arbitrarily add a node to the dom</button>
        <div className="row p-3">
        {Object.keys(this.state.phrases).map(uuid => {
          const phrase = this.state.phrases[uuid];
          return (
            <DeckItem {...phrase} uuid={uuid}
              onMarkLearned={() => this.handleStatusChange(uuid, 'learned')}
              onMarkActive={() => this.handleStatusChange(uuid, 'active')}
              onMarkRejected={() => this.handleStatusChange(uuid, 'rejected')}
              key={`deck-item-${uuid}`}
            />
          )
        })}
        </div>
      </div>
    );
  }
}

export default Deck;


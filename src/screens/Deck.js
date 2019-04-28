import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

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
          <div className="card w-100 shadow-sm mb-3 d-flex justify-content-between" key={phrase.id}>
            <div className="card-body">
              <p className="card-text float-left mb-0">
                <span className={`badge badge-${phrase.fields.status === 'active'? 'success':'info'}`}>{phrase.fields.status}</span>
                <span> {phrase.fields.text}</span>
              </p>
              <div className="btn-group float-right">
                <Link className="btn btn-sm btn-outline-secondary"
                    to={'/deck/' + this.props.language + '/card/' + phrase.id}>
                  Show
                </Link>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    );
  }
}

export default Deck;


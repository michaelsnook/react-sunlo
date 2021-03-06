import React, { Component } from 'react';

import Settings from '../settings';

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrases: [],
    };
  }

  componentDidMount() {
    fetch(Settings.API_URL + 'Phrases?api_key=' + Settings.API_KEY
        + '&view=browse_' + this.props.language)
      .then((resp) => resp.json())
      .then(data => {
        this.setState({ phrases: data.records })
      }).catch(err => {
        // Error 🙁
      });
  }

  render() {
    return (
      <div className="container py-3">
        <h2>Learn new {this.props.language} phrases</h2>
        <div className="row">
          {this.state.phrases.map(phrase =>
          <div className="col col-md-4" key={phrase.id}>
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <p className="card-text">{phrase.fields.text}</p>
                <p className="card-text text-muted">{phrase.fields.translation_texts}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Skip</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Learn it!</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Learned</button>
                  </div>
                  <small className="text-muted">{phrase.fields.language_name}</small>
                </div>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    );
  }
}

export default Browse;


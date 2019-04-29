import React, { Component } from 'react';

import Modal from './Modal';
import Settings from '../Settings';

class DeckItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: this.props.phrase,
      open: this.props.open || false,
      translations: []
    };
  }

  toggleModal = (e) => {
    console.log('toggling DeckItem modal')
    this.setState(state => ({
      open: !this.state.open
    }));
    e.preventDefault();
  }

  closeModal = (e) => {
    console.log('closing DeckItem modal');
    this.setState(state => ({
      open: false
    }));
    // e.preventDefault();
  }

  componentDidMount() {
    fetch(`${Settings.API_URL}Translations/?api_key=${Settings.API_KEY}&filterByFormula=%7Bphrase_id%7D%3D%22${this.props.phrase.fields.id}%22`)
      .then((resp) => resp.json())
      .then(data => {
        console.log(data);
        this.setState(state => ({
          translations: data.records
        }))
      })
      .catch(err => {
        // Error 🙁
      });
  }

  render() {
    return (
      <div className="card w-100 shadow-sm mb-3 d-flex justify-content-between">
        <div className="card-body">
          <p className="card-text float-left mb-0">
            <span className={`badge badge-${this.state.phrase.fields.status === 'active'? 'success':'info'}`}>{this.state.phrase.fields.status}</span>
            <span> {this.state.phrase.fields.text}</span>
          </p>
          <div className="btn-group float-right">
            <button className="btn btn-sm btn-outline-secondary" onClick={this.toggleModal}>
              Show
            </button>
          </div>
        </div>
        { this.state.open?
          <Modal title={this.state.phrase.fields.text}
              new_url={'/deck/' + this.props.phrase.fields.language_name + '/card/' + this.props.phrase.id}
              back_url={'/deck/' + this.props.phrase.fields.language_name}
              close_text="Close (go back)"
              closeModal={this.closeModal}
              >
            <div className="modal-header">
              <h3 className="modal-title">
                {this.state.phrase.fields.text}
              </h3>
            </div>
            <div className="modal-body">
              <p>translations:</p>
              <ul>
                {this.state.translations.map(t => (<li key={t.id}>{t.fields.text}</li>))}
              </ul>
            </div>
          </Modal>
          :
          <></>
        }
      </div>
    )
  }
}

export default DeckItem;

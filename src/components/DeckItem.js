import React, { Component } from 'react';
import Modal from './Modal';

class DeckItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: this.props.phrase,
      open: this.props.open || false
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
/*
 *  TODO: rewrite this to fetch all the Translations instead, and only when called
 *
 *  componentDidMount() {
 *    fetch(`${Settings.API_URL}Phrases/${this.props.uuid}?api_key=${Settings.API_KEY}`)
 *      .then((resp) => resp.json())
 *      .then(data => {
 *        console.log(data);
 *        this.setState(state => ({
 *          phrase: data
 *        }))
 *      })
 *      .catch(err => {
 *        // Error 🙁
 *      });
 *  }
 */

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
              <p>translations: {this.state.phrase.fields.translation_texts}</p>
              <p>translation IDs:</p>
              <ul>
                {this.state.phrase.fields.translations.map(t => <li key={t}>{t}</li>)}
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

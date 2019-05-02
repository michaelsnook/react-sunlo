import React, { Component } from 'react';

import Settings from '../settings';
import Modal from './modal';

class DeckItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: this.props.phrase,
      open: this.props.open || false,
      translations: [],
      status: this.props.phrase.fields.status,
      open_pronounce: false,
      encoded_whatsapp_message: encodeURIComponent(`Hey friend, how do I pronounce this phrase: "${this.props.phrase.fields.text}"? send me a voice message back / thanks :)`)
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

  openPronounce = (e) => {
    console.log('opening pronounce guide');
    this.setState(state => ({
      open_pronounce: true
    }));
  }

  componentDidMount() {
    fetch(`${Settings.API_URL}Translations/?api_key=${Settings.API_KEY}&filterByFormula=%7Bphrase_id%7D%3D%22${this.props.phrase.fields.id}%22`)
      .then((resp) => resp.json())
      .then(data => {
        console.log(data);
        this.setState({
          translations: data.records
        })
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
            <span className={`badge badge-${this.state.status === 'active'? 'primary': this.state.status === 'learned' ? 'success' : 'danger'}`}>{this.state.status}</span>
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

            <div className="modal-header bg-primary text-white">
              <h3 className="modal-title">
                {this.state.phrase.fields.text}
              </h3>
            </div>

            <div className="modal-body overflow-auto">
              <p>Translations:</p>
              {this.state.translations.map(t => (
                <blockquote className="blockquote border-left pl-3" key={t.id}>
                  <p className="mb-0">{t.fields.text}</p>
                  { t.fields.language_name?
                  <span className="text-muted small">{t.fields.language_name}</span>
                  : <></> }
                </blockquote>
              ))}

              <p>
                <button onClick={this.openPronounce} className="btn btn-link px-0">
                  <i className="fas fa-volume-up"></i> Pronunciation
                </button>
              </p>
              { this.state.open_pronounce?
              <>
                <p>
                  <i className="far fa-hand-paper"></i>&nbsp;
                  Sunlo is a tool for <em>social language learning</em> –
                  so go ask one of your {this.props.phrase.fields.language_name}-speaking friends how to
                  pronounce this phrase.&nbsp;
                  <i className="far fa-comments"></i>
                </p>
                <a href={`whatsapp://send?text=${this.state.encoded_whatsapp_message}`}
                    className="btn btn-outline-secondary m-y-1">
                  <i className="fab fa-whatsapp"></i> Ask on WhatsApp
                </a>
              </>
              :
              <></>
              }
            </div>

            <div className="btn-group p-3 btn-group-toggle" data-toggle="buttons">
              <button onClick={() => this.setState({status: 'learned'})} className={`btn ${this.state.status === 'learned' ? 'btn-success' : 'btn-outline-success'}`}>
                Done!
              </button>
              <button onClick={() => this.setState({status: 'active'})} className={`btn ${this.state.status === 'active' ? 'btn-primary' : 'btn-outline-primary'}`}>
                Learning
              </button>
              <button onClick={() => this.setState({status: 'rejected'})} className={`btn ${this.state.status === 'rejected' ? 'btn-danger' : 'btn-outline-danger'}`}>
                Dismiss
              </button>
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

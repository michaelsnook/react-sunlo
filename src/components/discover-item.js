import React, { Component } from 'react';

import Settings from '../settings';

import Modal from './modal';

class DiscoverItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
      translations: [],
      translations_loaded_once: false,
    };
  }

  fetchTranslations = () => {
    fetch(`${Settings.API_URL}Translations/?api_key=${Settings.API_KEY}&filterByFormula=%7Bphrase_id%7D%3D%22${this.props.fields.id}%22`)
      .then((resp) => resp.json())
      .then(data => {
        console.log(data);
        this.setState({
          translations: data.records,
          translations_loaded_once: true,
        })
      })
      .catch(err => {
        // Error 🙁
      });
  }

  componentDidMount() {
    this.fetchTranslations();
  }

  closeModal = () => {
    console.log('close modal');
    this.setState({ open: false });
  }

  render() {
    return (
      <Modal key={`discover-modal-${this.props.id}`}
        title={this.props.fields.text}
        open={this.state.open}
        closeModal={this.closeModal}
      >
        <div className="modal-header bg-primary text-white">
          <h3 className="modal-title">
            {this.props.fields.text}
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


        </div>

        <div className="w-100 px-3 btn-group mx-auto d-flex align-items-cener">
          <button onClick={this.closeModal} className="py-4 btn btn-outline-success btn-lg h3" role="alert">Learn it</button>
          <button onClick={this.closeModal} className="py-4 btn btn-outline-danger btn-lg h3" role="alert">Skip it</button>
        </div>
      </Modal>

    )
  }
}

export default DiscoverItem;

/*
*/

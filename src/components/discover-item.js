import React, { Component } from 'react';

import Settings from '../settings';

class DiscoverItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      render: true,
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
    setTimeout(() => this.setState({ render: false }), 300);

  }

  render() {
    return (this.state.render &&
      <>
        <div className={`modal fade d-flex ${this.state.open? 'show': ''}`} tabIndex="-1" role="dialog" aria-hidden={!this.state.open}>
          <div className="modal-dialog shadow-sm d-flex flex-fill" role="document">
            <div className="modal-content">

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

              <div className="w-100 px-3 mx-auto d-flex justify-content-around align-items-cener">
                <button onClick={this.closeModal} className="btn py-3 btn-danger btn-lg h3 col-5 mb-5" role="alert"><strong>Skip</strong></button>
                <button onClick={this.closeModal} className="btn py-3 btn-success btn-lg h3 col-5 mb-5" role="alert"><strong>Learn</strong></button>
              </div>

            </div>
          </div>
        </div>
        <div className={`modal-backdrop fade ${this.state.open? 'show':''}`}></div>
      </>

    )
  }
}

export default DiscoverItem;

/*
*/

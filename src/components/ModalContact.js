import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ContactForm from "./ContactForm";

class ModalContact extends React.Component {
  render() {
    let modalContact = null;
    if (this.props.showModalContact) {
      modalContact =
        <Modal className={'modal-contact'} show={this.props.showModalContact} onHide={this.props.closeModalContact}>
          <Modal.Header className={'title'} closeButton>
            <Modal.Title>Laissez-moi un message</Modal.Title>
          </Modal.Header>
          <ContactForm
            closeModalContact={this.props.closeModalContact}
          />
        </Modal>
    }
    return(
      <div>
        {modalContact}
      </div>
    )
  }
}

export default ModalContact;

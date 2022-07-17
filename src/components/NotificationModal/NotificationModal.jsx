import React from 'react';

import Modal from 'react-bootstrap/Modal';

const NotificationModal = ({ show, title, titleIcon, bodyText, closeModal }) => {
  return (
    <Modal show={show} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          {titleIcon} {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{bodyText}</Modal.Body>
    </Modal>
  );
};

export default NotificationModal;

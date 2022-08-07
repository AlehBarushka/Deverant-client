import React from 'react';

import { useSelector } from 'react-redux';

import Modal from 'react-bootstrap/Modal';

const ActionModal = ({ title, children }) => {
  const isShowing = useSelector(state => state.application.isModalActionModalShowing);

  return (
    <Modal show={isShowing} centered backdrop='static'>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default ActionModal;

import React from 'react';

import Modal from 'react-bootstrap/Modal';

const ProjectModal = ({ show, title, children }) => {
  return (
    <Modal show={show} centered>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default ProjectModal;

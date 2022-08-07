import React from 'react';
import { useSelector } from 'react-redux';

import Modal from 'react-bootstrap/Modal';

const NotificationModal = ({ titleIcon, title, onClose, children }) => {
  const isShowing = useSelector(state => state.application.isNotificationModalShowing);

  return (
    <Modal show={isShowing} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {titleIcon} {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default NotificationModal;

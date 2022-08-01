import React from 'react';

import { Button } from 'react-bootstrap';
import { AiOutlineFileAdd } from 'react-icons/ai';

const AddProjectButton = ({ handleShowModal }) => {
  return (
    <div className='mb-3'>
      <Button onClick={handleShowModal} className='add__project-button'>
        <AiOutlineFileAdd className='me-1' />
        New Project
      </Button>
    </div>
  );
};

export default AddProjectButton;

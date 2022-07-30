import React from 'react';

import { Button } from 'react-bootstrap';
import { AiOutlineFileAdd } from 'react-icons/ai';

const AddProject = () => {
  return (
    <div className='mb-3'>
      <Button size='sm add__project-button' onClick={() => alert('Good!')}>
        <AiOutlineFileAdd className='me-1' />
        New
      </Button>
    </div>
  );
};

export default AddProject;

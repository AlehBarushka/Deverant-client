import React from 'react';
import { useState } from 'react';

import { Button, Form } from 'react-bootstrap';

const AddProjectForm = ({ createNewProject, closeModal }) => {
  const [formData, setFormData] = useState({ projectName: '', projectDescription: '' });

  const handleOnChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createNewProject(formData);
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group className='mb-3'>
        <Form.Label className='mb-1'>Project name:</Form.Label>
        <Form.Control
          name='projectName'
          type='text'
          placeholder='Facebook'
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label className='mb-1'>Project description:</Form.Label>
        <Form.Control
          as='textarea'
          name='projectDescription'
          type='text'
          placeholder='Some description...'
          onChange={handleOnChange}
        />
      </Form.Group>
      <div className='d-flex justify-content-end'>
        <Button variant='secondary' type='submit' className='me-1'>
          Create
        </Button>
        <Button variant='secondary' onClick={closeModal}>
          Close
        </Button>
      </div>
    </Form>
  );
};

export default AddProjectForm;

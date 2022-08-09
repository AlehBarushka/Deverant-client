import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Form, Button } from 'react-bootstrap';

const EditProjectForm = ({ project }) => {
  const navigate = useNavigate();
  return (
    <Form>
      <Form.Group className='mb-3'>
        <Form.Label>Project title:</Form.Label>
        <Form.Control type='text' readOnly value={project.project_name} />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Project description:</Form.Label>
        <Form.Control as='textarea' readOnly rows={3} value={project.description} />
      </Form.Group>
      <Button disabled className='me-1 button-primary' onClick={() => navigate(-1)}>
        Apply
      </Button>
      <Button variant='secondary' onClick={() => navigate(-1)}>
        Back
      </Button>
    </Form>
  );
};

export default EditProjectForm;

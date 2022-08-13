import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form, Button, InputGroup, Row, Col } from 'react-bootstrap';

const EditProjectForm = ({ project, updateProject }) => {
  const [editMode, setEditMode] = useState(false);
  const [projectData, setProjectData] = useState({
    title: project.project_name,
    description: project.description,
    price: project.money,
  });

  const navigate = useNavigate();

  const onSwitchAction = () => {
    setEditMode(!editMode);
  };

  const handleOnChange = e => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateProject({ ...projectData, id: project.id });
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Switch className='my-3' onChange={onSwitchAction} label='Edit mode' />
      <Form.Group className='mb-3'>
        <Form.Label>Project title:</Form.Label>
        <Form.Control
          type='text'
          name='title'
          readOnly={!editMode}
          value={projectData.title}
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Project description:</Form.Label>
        <Form.Control
          as='textarea'
          name='description'
          readOnly={!editMode}
          rows={3}
          value={projectData.description}
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group as={Row} className='mb-3'>
        <Col md={4}>
          <Form.Label>Cost:</Form.Label>
          <InputGroup className='mb-2'>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              type='number'
              name='price'
              readOnly={!editMode}
              value={projectData.price}
              onChange={handleOnChange}
            />
          </InputGroup>
        </Col>
      </Form.Group>
      <Button disabled={!editMode} type='submit' className='me-1 button-primary'>
        Save
      </Button>
      <Button variant='secondary' onClick={() => navigate(-1)}>
        Back
      </Button>
    </Form>
  );
};

export default EditProjectForm;

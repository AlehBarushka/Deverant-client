import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Form, Button, InputGroup, Row, Col } from 'react-bootstrap';
import { AiOutlineProject } from 'react-icons/ai';

const EditProjectForm = ({ project }) => {
  const navigate = useNavigate();
  return (
    <Form>
      <h2 className='text-center fs-3 mb-3 title'>
        <AiOutlineProject className='me-1 fs-5' />
        Project details
      </h2>
      <Form.Group className='mb-3'>
        <Form.Label>Project title:</Form.Label>
        <Form.Control type='text' readOnly value={project.project_name} />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Project description:</Form.Label>
        <Form.Control as='textarea' readOnly rows={3} value={project.description} />
      </Form.Group>
      <Form.Group as={Row} className='mb-3'>
        <Col md={4}>
          <Form.Label>Cost:</Form.Label>
          <InputGroup className='mb-2'>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control type='number' readOnly value={project.separately_money} />
          </InputGroup>
        </Col>
      </Form.Group>

      <Button disabled className='me-1 button-primary' onClick={() => navigate(-1)}>
        Save
      </Button>
      <Button variant='secondary' onClick={() => navigate(-1)}>
        Back
      </Button>
    </Form>
  );
};

export default EditProjectForm;

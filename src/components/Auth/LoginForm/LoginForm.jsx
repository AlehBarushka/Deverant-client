import React from 'react';

import { Button, Container, Form } from 'react-bootstrap';
import { BiLogIn } from 'react-icons/bi';

const SignUpForm = () => {
  return (
    <Container className='shadow p-5 rounded border'>
      <Form noValidate onSubmit={() => console.log('submit')}>
        <h3 className='text-center mb-3 auth-title'>
          <BiLogIn className='me-1 fs-5' />
          Login
        </h3>
        <Form.Group className='mb-3'>
          <Form.Label className='mb-1'>Email:</Form.Label>
          <Form.Control name='email' type='email' placeholder='name@example.com' />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label className='mb-1'>Password:</Form.Label>
          <Form.Control name='password' type='password' placeholder='Password' />
        </Form.Group>
        <Button type='submit'>Login</Button>
      </Form>
    </Container>
  );
};

export default SignUpForm;

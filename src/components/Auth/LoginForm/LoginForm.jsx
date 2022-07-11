import React from 'react';
import { useFormik } from 'formik';

import { Button, Container, Form } from 'react-bootstrap';
import { BiLogIn } from 'react-icons/bi';

const SignUpForm = ({ login }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: loginData => {
      login(loginData);
    },
  });

  return (
    <Container className='shadow p-5 rounded border'>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <h3 className='text-center mb-3 auth-title'>
          <BiLogIn className='me-1 fs-5' />
          Login
        </h3>
        <Form.Group className='mb-3'>
          <Form.Label className='mb-1'>Email:</Form.Label>
          <Form.Control
            name='email'
            type='email'
            placeholder='name@example.com'
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label className='mb-1'>Password:</Form.Label>
          <Form.Control
            name='password'
            type='password'
            placeholder='Password'
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Button type='submit'>Login</Button>
      </Form>
    </Container>
  );
};

export default SignUpForm;

import React from 'react';
import { useFormik } from 'formik';

import { Button, Container, Form } from 'react-bootstrap';
import { BiEditAlt } from 'react-icons/bi';

const SignUpForm = ({ signUp, isLoading }) => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    onSubmit: registrationData => {
      signUp(registrationData);
    },
  });

  return (
    <Container className='shadow p-5 rounded border'>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <h3 className='text-center mb-3 auth-title'>
          <BiEditAlt className='me-1 fs-5' />
          Sign up
        </h3>
        <Form.Group className='mb-3'>
          <Form.Label className='mb-1'>Username:</Form.Label>
          <Form.Control
            name='userName'
            type='text'
            placeholder='Billy'
            value={formik.values.userName}
            onChange={formik.handleChange}
          />
        </Form.Group>
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
        {/* <Form.Group className='mb-3'>
          <Form.Label className='mb-1'>Confirm password:</Form.Label>
          <Form.Control name='confirmPassword' type='password' placeholder='Confirm password' />
        </Form.Group> */}
        <Button disabled={isLoading} type='submit'>
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

export default SignUpForm;

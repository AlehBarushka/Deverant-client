import React from 'react';
import { useFormik } from 'formik';

import { Button, Form } from 'react-bootstrap';
import { BiLogIn } from 'react-icons/bi';

import { loginValidation } from '../../../utils/formValidation';

const LoginForm = ({ login, isLoading }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: loginData => {
      login(loginData);
    },
    validationSchema: loginValidation,
  });

  return (
    <>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <h2 className='text-center fs-3 mb-3 title'>
          <BiLogIn className='me-1 fs-5' />
          Login
        </h2>
        <Form.Group className='mb-3'>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            name='email'
            type='email'
            placeholder='name@example.com'
            value={formik.values.email}
            onChange={formik.handleChange}
            isInvalid={formik.errors?.email && formik.touched?.email}
          />
          <Form.Control.Feedback type='invalid'>{formik.errors.email}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            name='password'
            type='password'
            placeholder='Password'
            value={formik.values.password}
            onChange={formik.handleChange}
            isInvalid={formik.errors?.password && formik.touched?.password}
          />
          <Form.Control.Feedback type='invalid'>{formik.errors.password}</Form.Control.Feedback>
        </Form.Group>
        <Button className='button-primary' disabled={isLoading} type='submit'>
          Login
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;

import React from 'react';
import { useFormik } from 'formik';

import { Button, Form } from 'react-bootstrap';
import { BiEditAlt } from 'react-icons/bi';

import { signUpValidation } from '../../../utils/formValidation';

const SignUpForm = ({ signUp, isLoading }) => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: registrationData => {
      signUp(registrationData);
    },
    validationSchema: signUpValidation,
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <h2 className='text-center fs-3 mb-3 title'>
        <BiEditAlt className='me-1 fs-5' />
        Sign up
      </h2>
      <Form.Group className='mb-3'>
        <Form.Label>Username:</Form.Label>
        <Form.Control
          name='userName'
          type='text'
          placeholder='Billy'
          value={formik.values.userName}
          onChange={formik.handleChange}
          isInvalid={formik.errors?.userName && formik.touched?.userName}
        />
        <Form.Control.Feedback type='invalid'>{formik.errors.userName}</Form.Control.Feedback>
      </Form.Group>
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
      <Form.Group className='mb-3'>
        <Form.Label>Confirm password:</Form.Label>
        <Form.Control
          name='passwordConfirm'
          type='password'
          placeholder='Confirm password'
          value={formik.values.passwordConfirm}
          onChange={formik.handleChange}
          isInvalid={formik.errors?.passwordConfirm && formik.touched?.passwordConfirm}
        />
        <Form.Control.Feedback type='invalid'>
          {formik.errors.passwordConfirm}
        </Form.Control.Feedback>
      </Form.Group>
      <Button className='button-primary' disabled={isLoading} type='submit'>
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUpForm;

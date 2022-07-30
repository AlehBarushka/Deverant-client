import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';

const Auth = () => {
  return (
    <>
      <Button
        variant='outline-light'
        size='sm'
        className='me-1 header-button'
        as={Link}
        to={'auth/login'}>
        Login
      </Button>
      <Button
        variant='outline-light'
        size='sm'
        className='me-1 header-button'
        as={Link}
        to={'auth/registration'}>
        Sign Up
      </Button>
    </>
  );
};

export default Auth;

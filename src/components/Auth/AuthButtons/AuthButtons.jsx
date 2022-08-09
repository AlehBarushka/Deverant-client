import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';

const AuthButtons = () => {
  return (
    <div>
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
    </div>
  );
};

export default AuthButtons;

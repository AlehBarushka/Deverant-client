import React from 'react';

import { Button } from 'react-bootstrap';
import { BiLogOut } from 'react-icons/bi';

const Logout = ({ logout }) => {
  return (
    <Button className='me-1 header-button' onClick={logout} variant='outline-light' size='sm'>
      <BiLogOut className='me-1 fs-5' />
      Logout
    </Button>
  );
};

export default Logout;

import React from 'react';

import { Button } from 'react-bootstrap';
import { BiLogOut } from 'react-icons/bi';

const LogoutButton = ({ logout }) => {
  return (
    <Button className='me-1 header-button' onClick={logout} size='sm'>
      <BiLogOut className='me-1 fs-5' />
      Logout
    </Button>
  );
};

export default LogoutButton;

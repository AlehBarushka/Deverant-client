import React from 'react';

import { MdBarChart } from 'react-icons/md';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';

import AuthButtons from '../Auth/AuthButtons';
import LogoutButton from '../Auth/LogoutButton';
import NavMenu from './NavMenu';

const Header = ({ isAuthenticated, logout }) => {
  return (
    <Navbar collapseOnSelect expand='md' variant='dark' className='header'>
      <Container>
        <NavbarBrand as={'div'} className='d-flex align-items-center pt-0'>
          <MdBarChart className='me-1 fs-3' />
          <h1 className='fs-3 mb-0'>Deverant</h1>
        </NavbarBrand>
        {isAuthenticated ? (
          <>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <NavMenu />
              <LogoutButton logout={logout} />
            </Navbar.Collapse>
          </>
        ) : (
          <AuthButtons />
        )}
      </Container>
    </Navbar>
  );
};

export default Header;

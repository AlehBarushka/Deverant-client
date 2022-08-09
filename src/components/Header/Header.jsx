import React from 'react';

import { MdBarChart } from 'react-icons/md';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';

import AuthButtons from '../Auth/AuthButtons';
import LogoutButton from '../Auth/LogoutButton';
import NavMenu from './NavMenu';

const Header = ({ isAuthenticated, logout }) => {
  return (
    <Navbar collapseOnSelect className='header' expand='md' variant='dark'>
      <Container>
        <NavbarBrand className='pt-0 d-flex align-items-center'>
          <MdBarChart className='me-1 fs-3' />
          <h1 className='fs-3 mb-0'>Deverant</h1>
        </NavbarBrand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          {isAuthenticated ? (
            <>
              <NavMenu />
              <LogoutButton logout={logout} />
            </>
          ) : (
            <AuthButtons />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

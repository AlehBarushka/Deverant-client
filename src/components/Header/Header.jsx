import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { NAV_ITEMS } from '../../constants/navbar';

import { MdBarChart } from 'react-icons/md';
import { Container, Navbar, Nav, NavbarBrand, NavLink, NavItem } from 'react-bootstrap';

import Auth from '../Buttons/Auth';
import Logout from '../Buttons/Logout';

const Header = ({ isAuthenticated, logout }) => {
  const location = useLocation();

  const getNavItems = () =>
    NAV_ITEMS.map(({ link, title }, index) => (
      <NavItem key={index}>
        <NavLink eventKey={link} as={Link} to={link}>
          {title}
        </NavLink>
      </NavItem>
    ));

  return (
    <Navbar collapseOnSelect className='header' expand='md' variant='dark'>
      <Container>
        <NavbarBrand className='pt-0 d-flex align-items-center' as={Link} to='/'>
          <MdBarChart className='me-1 fs-3' />
          <h1 className='fs-3 mb-0'>Deverant</h1>
        </NavbarBrand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav activeKey={location.pathname} className='me-auto my-1'>
            {getNavItems()}
          </Nav>
          {isAuthenticated ? <Logout logout={logout} /> : <Auth />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

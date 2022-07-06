import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { NAV_ITEMS } from '../../constants/navbar';

import styles from './Header.module.css';
import { MdBarChart } from 'react-icons/md';
import { BiLogIn, BiEditAlt, BiLogOut } from 'react-icons/bi';
import { Container, Navbar, Nav, NavbarBrand, Button, NavLink, NavItem } from 'react-bootstrap';

const Header = () => {
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
    <Navbar collapseOnSelect className={styles.header} expand='md' variant='dark'>
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
          <Button
            onClick={() => alert('work')}
            variant='outline-light'
            size='sm'
            className={`me-1 ${styles.button}`}
            as={Link}
            to={'/login'}>
            <BiLogIn className='me-1 fs-5' />
            Login
          </Button>
          <Button
            onClick={() => alert('work')}
            variant='outline-light'
            size='sm'
            className={`me-1 ${styles.button}`}
            as={Link}
            to={'/signup'}>
            <BiEditAlt className='me-1 fs-5' />
            SignUp
          </Button>
          <Button
            className={`me-1 ${styles.button}`}
            onClick={() => alert('work')}
            variant='outline-light'
            size='sm'>
            <BiLogOut className='me-1 fs-5' />
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

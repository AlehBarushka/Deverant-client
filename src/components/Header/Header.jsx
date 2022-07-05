import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import { Container, Row, Col, Navbar, Nav, NavbarBrand, Button, NavLink } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className={styles.header} expand='md' variant='dark'>
      <Container>
        <NavbarBrand className='pt-0' as={Link} to='/'>
          <h1 className='fs-3 mb-0'>Deverant</h1>
        </NavbarBrand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto my-1'>
            <NavLink as={Link} to={'/statistics'}>
              Statistics
            </NavLink>
            <NavLink as={Link} to={'/projects/list'}>
              Projects
            </NavLink>
          </Nav>
          <Row>
            <Col>
              <Button
                onClick={() => alert('work')}
                variant='outline-light'
                size='sm'
                className={`me-1 ${styles.button}`}
                as={Link}
                to={'/login'}>
                Login
              </Button>
              <Button
                onClick={() => alert('work')}
                variant='outline-light'
                size='sm'
                className={`me-1 ${styles.button}`}
                as={Link}
                to={'/signup'}>
                SignUp
              </Button>
              <Button
                className={`me-1 ${styles.button}`}
                onClick={() => alert('work')}
                variant='outline-light'
                size='sm'>
                Logout
              </Button>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

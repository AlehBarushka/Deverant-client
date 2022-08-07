import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { NAV_ITEMS } from '../../../constants/navbar';

import { Nav, NavLink, NavItem } from 'react-bootstrap';

const NavMenu = () => {
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
    <Nav activeKey={location.pathname} className='me-auto my-1'>
      {getNavItems()}
    </Nav>
  );
};

export default NavMenu;

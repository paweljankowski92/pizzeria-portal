import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNav = () => (
  <nav>
    <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName="active">Dashboard</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName="active">Login</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName="active">Tables</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/orderwaiter`} activeClassName="active">OrderWaiter</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName="active">Kitchen</NavLink>
  </nav>
);

export default PageNav;

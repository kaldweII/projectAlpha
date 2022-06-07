
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'
import { HouseFill, PeopleFill } from 'react-bootstrap-icons';



const NavBar = () => {
  return (
    <nav className='navBar'>
      <ul className='navList'>
        <li>
          <NavLink className='navLink' to='/' exact={true} activeClassName='active'>
            <HouseFill />

          </NavLink>
        </li>
        {/* <li>
          <NavLink className='navLink' to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink className='navLink' to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li> */}
        <li>
          <NavLink className='navLink' to='/users' exact={true} activeClassName='active'>
            <PeopleFill/>
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

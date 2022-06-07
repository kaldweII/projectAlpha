import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { BoxArrowRight } from 'react-bootstrap-icons';


const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <button className='logoutButton' onClick={onLogout}><BoxArrowRight/></button>;
};

export default LogoutButton;

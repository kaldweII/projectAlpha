import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './auth.css';
import { Button, Modal, Form } from 'react-bootstrap';


const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onLogin} className='loginForm'>
      {/* <h1>ASARᴴᴿ</h1> */}
     
      <div className='formInput'>
        <label htmlFor='email'></label>
        <input className='input'
        
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className='formInput'>
        <label htmlFor='password'></label>
        <input
          className='input'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
      </div>
  
      <Button className='loginButton' variant="success" type='submit'>Login</Button>
      <div className='loginErrors'>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>

    </form>
  );
};

export default LoginForm;

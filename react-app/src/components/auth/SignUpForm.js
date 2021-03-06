import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import { Button } from 'react-bootstrap';
import './auth.css'
import ReCAPTCHA from 'react-google-recaptcha';


const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [role, setRole] = useState('contractor');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(role, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  function onChange(value) {
    console.log('Captcha value:', value);}


  const updateRole = (e) => {
    setRole(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp} className='signUpForm' >
      {/* <div className='formInput'>
        <label></label>
        <input
          type='text'
          name='role'
          placeholder='Role'
          onChange={updateRole}
          value={role}
        ></input>
      </div> */}
      <div className='formInput emailInput'>
        <label></label>
        <input
          type='text'
          name='email'
          placeholder='Email'
          onChange={updateEmail}
          value={email}
          required
        ></input>
      </div>
      <div className='formInput'>
        <label></label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={updatePassword}
          value={password}
          required
        ></input>
      </div>
      <div className='formInput'>
        <label></label>
        <input
          type='password'
          name='repeat_password'
          placeholder='Repeat Password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <Button className='signUpButton' variant='success' type='submit'>Sign Up</Button>
      <div className='loginErrors'>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className="App">
        <ReCAPTCHA
          sitekey='6LdoDIcgAAAAAIlgr26T3uGl6lUi6InTfLibkv2-'
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default SignUpForm;
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ItemSignup.css';

export default function ItemSignup() {
  return (
    <div className='main-li-container'>
      <h1 className='signup-head'>Sign In</h1>
      <ul>
        <li className='item-list'>
          <label className='class-label'>Name</label>
          <input className='class-input' type='text'></input>
        </li>
        <li className='item-list'>
          <label className='class-label'>NIC Number</label>
          <input className='class-input' type='text'></input>
        </li>
        <li className='item-list'>
          <label className='class-label'>Account Number</label>
          <input className='class-input' type='text'></input>
        </li>
        <li className='item-list'>
          <label className='class-label'>Email</label>
          <input className='class-input' type='email'></input>
        </li>
        <li className='item-list'>
          <label className='class-label'>Password</label>
          <input className='class-input' type='password'></input>
        </li>
        <li className='item-list'>
          <label className='class-label'>Confirm Password</label>
          <input className='class-input' type='password'></input>
        </li>
        
        <li className='item-list'>
          <button className='signup-button'>Sign Up</button>
        </li>
        <div className="decoy-div">
        <li className='item-list'>
          <p className='signin-text'>Already Have an account? <button className='signin-link'>Sign in</button>
          </p>
        </li>
        </div>
      </ul>
    </div>
  );
}

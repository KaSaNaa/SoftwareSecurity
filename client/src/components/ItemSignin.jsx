/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './ItemSignup.css';
export default function ItemSignin() {
  return (
    <div className='main-li-container'>
      <h1 className='signup-head'>Sign In</h1>
      <ul>
        <li className='item-list'>
          <label className='class-label'>Email</label>
          <input className='class-input' type='email'></input>
        </li>
        <li className='item-list'>
          <label className='class-label'>Password</label>
          <input className='class-input' type='password'></input>
        </li>
        
        
        <li className='item-list'>
          <button className='signup-button'>Sign In</button>
        </li>
        <div className="decoy-div">
        <li className='item-list'>
          <p className='signin-text'>Don't Have an account? <button className='signin-link'>Sign up</button>
          </p>
        </li>
        </div>
      </ul>
    </div>
  )
}

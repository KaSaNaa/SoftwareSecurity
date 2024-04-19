// eslint-disable-next-line no-unused-vars
import React from 'react'
import './signupPage.css'
import Banking from "../components/Banking"
import ItemSignup from '../components/ItemSignup'
export default function SignupPage() {
  return (
    <div className='all-in-signup'>
      
      <ItemSignup/>
      <Banking/>
    </div>
  )
}

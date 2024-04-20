// eslint-disable-next-line no-unused-vars
import React from 'react'
import './changingMiddle.css'
import arrow from '../assets/icons/arrowMark.svg'
import plus from '../assets/icons/plusMark.svg'
export default function ChangingMiddle() {
  return (
    <div className='changine-middle-container'>
        <h3 className='saving-head'>Savings Account</h3>
        <h2 className='savings'>Savings</h2>
        <div className='details-div'>
            <div className='account-side'>
                <h3 className='acc'>Account Number</h3>
                <label className='acc-no' id='acc_num'>12345678</label>
            </div>
            <div className='balance-side'>
                <h3 className='acc'>Balance(LKR)</h3>
                <label className='balance' id='balance'>1234.00</label>
            </div>
            <div className='icon-container'>
                <img className='arrow-icon' src={arrow} alt='arrow'></img>
            </div>
        </div>

        <h2 className='deposit'>Deposits</h2>
        <div className='deposit-div'>
            <div className='decoy-side'>
                <img className='arrow' src={plus} alt='plus'></img>
                <p className='deposit-para'>Open Fixed deposit</p>
            </div>
            <p className='deposit-second'>Start your savings journey today!</p>

        </div>
        
      



    </div>
  )
}

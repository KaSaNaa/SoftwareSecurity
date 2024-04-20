// eslint-disable-next-line no-unused-vars
import React from 'react';
import './moneyTransfer.css';

export default function MoneyTransfer() {
  return (
    <div className='transaction-container'>
      <h2 className='main-transation-header'>Transaction</h2>
      <div className='middle-transcation'>
        <h3 className='transaction-little-header'>Savings</h3>
        <div className='transaction-mid-deatil'>
          <div className='div-transation-left'>
            <div className='pay-from'>
              <div className='decoy-transaction'>
              <h3 className='pay-header'>Pay From</h3>
                <input type='text' className='account-input' placeholder='Account Number' />
                <input type='text' className='money-input' placeholder='Amount' />
              </div>
              <div className='decoy-pay'>
                <h3 className='pay-header'>Pay To</h3>
                <input type='text' className='money-input' placeholder='Account Number' />
              </div>
            </div>
          </div>
          <div className='div-transation-right'>
            <input type='text' className='list-item-input' placeholder='Amount' />
            <input type='text' className='list-item-input' placeholder='Receiver Reference' />
            <input type='text' className='list-item-input' placeholder='My Reference' />
            
          </div>
        </div>
      </div>
      <div className='button-container'>
  <button className='pay-now-button'>Pay Now</button>
</div>

    </div>
  );
}

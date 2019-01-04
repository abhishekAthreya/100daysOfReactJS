import React from 'react';
import BasicInput from './BasicInput';
import ExpiryDate from './ExpiryDate';
import CheckoutButton from './CheckoutButton';

const PaymentForm = props => {
    return (
        <div className="PaymentForm">
        <form onSubmit={props.onSubmit}>
          <div className="Title">Payment information</div>
          <BasicInput name="name" label="Name on credit card" type="text" placeholder="Abhishek R Athreya" />
          <BasicInput name="card" label="Credit card number" type="number" placeholder="0000 0000 0000 0000" />
          <ExpiryDate />
          <CheckoutButton />
        </form>
      </div>
    );
};


export default PaymentForm;
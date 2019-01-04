import React from 'react';
import pluralize from 'pluralize';

const OrderSummary = (props) => {
    const duration = props.duration + " " + pluralize('day',parseInt(props.duration));
    const initialTotal = props.duration * props.price;
    
    // Discount Calculation
    const discount = Math.floor((initialTotal / 100) * props.discount);
    
    // Subtotal (with Discount)
    const subTotal = initialTotal - discount;
    
    // Calculate tax
    const tax = Math.floor((subTotal / 100) * props.tax);
    
    // Total
    const total = subTotal + tax;
    return (
        <div className="OrderSummary">
        <div className="Title">Order Summary</div>
        <table>
          <tbody>
            <tr>
              <td>{props.price} x {duration}</td>
              <td>{initialTotal} GBP</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>{discount} GBP</td>
            </tr>
            <tr>
              <td>Subtotal</td>
              <td>{subTotal} GBP</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>{tax} GBP</td>
            </tr>
          </tbody>
        </table>
        <div className="Total">
          <div className="TotalLabel">Total</div>
          <div className="Amount">
            {total} <small>GBP</small>
          </div>
        </div>
      </div>
    );
};

export default OrderSummary;
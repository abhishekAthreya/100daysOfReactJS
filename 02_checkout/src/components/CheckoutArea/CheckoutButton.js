import React from 'react';


const CheckoutButton = props => {
    return (
        <div className="CheckoutButton">
        <button>Book securely</button>
        <span><i className="fa fa-fw fa-lock"></i> Your credit card information is encrypted</span>
      </div>
    );
};

export default CheckoutButton;
import React from 'react';
import './Payment.css';

function Payment() {
  return (
    <div className="payment-container">
      <h1 className="payTitle">Personal Information</h1>
      <label>Name and Surname</label>
      <input type="text" placeholder="John Doe" className="payInput" />
      <label>Phone Number</label>
      <input type="text" placeholder="+1 234 5678" className="payInput" />
      <label>Address</label>
      <input type="text" placeholder="Elton St 21 22-145" className="payInput" />

      <h1 className="payTitle">Card Information</h1>
      <div className="cardIcons">
        <img src="./images/visa.png" width="40" alt="Visa" className="cardIcon" />
        <img src="./images/master.png" width="40" alt="MasterCard" className="cardIcon" />
      </div>
      <input type="password" className="payInput" placeholder="Card Number" />
      <div className="cardInfo">
        <input type="text" placeholder="mm" className="payInput sm" />
        <input type="text" placeholder="yyyy" className="payInput sm" />
        <input type="text" placeholder="cvv" className="payInput sm" />
      </div>
      <button className="payButton">Checkout !</button>
      <span className="close">X</span>
    </div>
  );
}

export default Payment;

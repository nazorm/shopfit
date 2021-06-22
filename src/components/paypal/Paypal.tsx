import React from "react";
import "../pagination/styles.scss";
import { PayPalButton } from "react-paypal-button-v2";

const PaypalBtn = (): JSX.Element => {
  const onSuccess = (payment: any) => {
    // I made it
    console.log("Payment successful!", payment);
  };

  const onCancel = (data: any) => {
    //payment don cancel
    console.log("Payment cancelled!", data);
  };
  let env = "sandbox"; 
  let currency = "USD"; 
  let total = 1; 
  const onError = (err: any) => {
    console.log("Error!", err);
  };
  const client = {
    sandbox:  `${process.env.REACT_APP_SANDBOX}`,
    production: `${process.env.REACT_APP_PRODUCTION}`
  };

  return (
    <div className="payment">
      <PayPalButton
        currency={currency}
        onError={onError}
        onSuccess={onSuccess}
      />
    </div>
  );
};

export default PaypalBtn;

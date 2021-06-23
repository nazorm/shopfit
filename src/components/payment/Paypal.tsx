import React from "react";
import "../pagination/styles.scss";
import { PayPalButton } from "react-paypal-button-v2";

const PaypalBtn = (): JSX.Element => {
  const onSuccess = (payment: object) => {
    // I made it
    console.log("Payment successful!", payment);
  };
  const onError = (error: object) => {
    alert(error);
  };

  let currency = "USD";
  let amount = "10";
  const client = {
    sandbox: `${process.env.REACT_APP_SANDBOX}`,
    production: `${process.env.REACT_APP_PRODUCTION}`,
  };

  return (
    <div className="payment">
      <PayPalButton
        amount={amount}
        currency={currency}
        onSuccess={onSuccess}
        onError={onError}
        options={{
          clientId: client.sandbox,
        }}
      />
    </div>
  );
};

export default PaypalBtn;

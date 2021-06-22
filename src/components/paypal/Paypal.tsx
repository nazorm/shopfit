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
    sandbox:        
      "ATDClrog6UlvC2aqc4DGxJUUdmJQO1BuLRitmKmjLxF1Q1aaK3tS6kVZoIRKOfaXrL9nCrto2uYh-Dvg",
    production:
      "ELUIR2HFbBJYoGmBtuHLhyMH-_PBLrpQqOoIZQMh2sQwsH0_yq4hxLZ6AWq2aCzLnkmopnuudlLa3jmS",
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

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IraStAWpbbrZVHxVfHWdulU1rOnlsidIXJm98YG2dDiLSyqNWioUilfDlEwkx15gpuTxLhPIjjLNHVDvS77HK2u00dUs1U19A";

  const onToken = (token) => {
    console.log(token);

    alert("Payment Succesful");
  };

  return (
    <StripeCheckout
      amount={priceForStripe}
      billingAddress
      description={`Your total is $${price}`}
      image="https://svgshare.com/i/CUz.svg"
      label="Pay Now"
      name="CRWN Clothing Ltd."
      panelLabel="Pay Now"
      shippingAddress
      stripeKey={publishableKey}
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;

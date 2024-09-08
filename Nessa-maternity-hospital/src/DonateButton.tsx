
function BuyButtonComponent() {
  // Paste the stripe-buy-button snippet in your React component
  return (
    <stripe-buy-button
      buy-button-id="{{BUY_BUTTON_ID}}"
      publishable-key="pk_test_51PrF6aRxzF3XYr6I539lJURyZDp1NYOcQvxicld10KckilXDjFHxunR5ifOGXVPgVz1ajDC4M3PlRIupF8CkyCOk00K8yE9Mgn"
    >
    </stripe-buy-button>
  );
}

export default BuyButtonComponent;
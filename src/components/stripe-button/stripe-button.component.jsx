import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HCIskFbrjrLqtmXGMO0yr6smf6G3qXIYDLdU1karEYRtYbzJqw3P9WFDg4amhBU1luj1s1U15m2tUFQxm0UwgUJ00rvHOagWw'

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful')
    }
    
    return (
        <StripeCheckout
            label='Pay Now'
            name= 'CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;

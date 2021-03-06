import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/cart/cart.actions";

const StripeCheckoutButton = ({ price }) => {
    const dispatch = useDispatch();
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JlbDpBNEtBjYn5JrWAimyUUVfqyp0cYYurGmRrHhyfVvgwuUvPf6KkNo6h6dni0GFtLJeR1NuywtmspWAEOtkSZ00gE9Y8K8M';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Successful!');
            dispatch(clearCart());

        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(
                'There was an issue with your payment. Please make sure you use the provided credit card.'
            )
        });
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};


export default StripeCheckoutButton;
import React from "react";
import { useSelector } from "react-redux";
import {
    selectCartItems,
    selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import { CheckoutPageContainer, CheckoutPageHeader, CheckoutPageTotal, CheckoutPageTestWarning } from './checkout.styles'


const CheckoutPage = () => {
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);

    return (
        <CheckoutPageContainer className="checkout-page">
            <CheckoutPageHeader className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </CheckoutPageHeader>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <CheckoutPageTotal className='total'>
                <span>TOTAL: ${total}</span>

            </CheckoutPageTotal>
            <StripeCheckoutButton price={total} />
            <CheckoutPageTestWarning>
                *Please use the following test credit card for payments*<br />

                4242 4242 4242 4242 - Exp: 01/26 - CVV: 123
            </CheckoutPageTestWarning>

        </CheckoutPageContainer>
    );
}

export default CheckoutPage;

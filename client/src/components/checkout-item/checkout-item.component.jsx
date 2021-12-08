import React from "react";
import { useDispatch } from "react-redux";
import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";

import {
    CheckoutItemContainer,
    CheckoutItemImageContainer,
    CheckoutItemName,
    CheckoutItemQuantity,
    CheckoutItemPrice,
    CheckoutItemRemoveButton
} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {

    const dispatch = useDispatch();
    const { name, imageUrl, price, quantity } = cartItem;

    return (

        <CheckoutItemContainer>
            <CheckoutItemImageContainer>
                <img alt='item' src={imageUrl} />
            </CheckoutItemImageContainer>
            <CheckoutItemName>{name}</CheckoutItemName>
            <CheckoutItemQuantity>
                <div className='arrow' onClick={() => dispatch(removeItem(cartItem))}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => dispatch(addItem(cartItem))}>&#10095;</div></CheckoutItemQuantity>
            <CheckoutItemPrice>{price}</CheckoutItemPrice>
            <CheckoutItemRemoveButton onClick={() => dispatch(clearItemFromCart(cartItem))}>&#10007;</CheckoutItemRemoveButton>

        </CheckoutItemContainer>
    )
};



export default CheckoutItem;


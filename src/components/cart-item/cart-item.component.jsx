import React from 'react'
import {
    CartItemContainer,
    ItemDetailsContainer,
    ItemInfo,
    ImageContainer} 
from './cart-item.styles'

const cartItem = ({item : {imageUrl, price , name , quantity } }) => (
    <CartItemContainer>
        <ImageContainer src={imageUrl} alt='item'/>
        <ItemDetailsContainer>
            <ItemInfo>{name}</ItemInfo>
            <ItemInfo> {quantity} x ${price} </ItemInfo>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default cartItem;
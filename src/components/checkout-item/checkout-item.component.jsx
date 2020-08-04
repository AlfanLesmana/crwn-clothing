import React from 'react'
import {connect} from 'react-redux';
import {clearItemFromCart , removeItem , addItem} from '../../redux/cart/cart.actions'
import {
    CheckoutItemContainer,
    ImageContainer,
    QuantityContainer,
    PriceInfo,
    RemoveButton,
    NameInfo,
} from './checkout-item.styles'

const CheckoutItem = ({cartItem , clearItem , addItem , removeItem}) => {

    const {name,imageUrl,price,quantity} = cartItem;
    return(
    <CheckoutItemContainer>
        <ImageContainer>
            <img alt='item' src={imageUrl}/>
        </ImageContainer>
        <NameInfo>{name}</NameInfo>
        <QuantityContainer>
            <div className='arrow' onClick={()=> removeItem(cartItem)}> &#10094; </div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={()=> addItem(cartItem)}> &#10095; </div>
        </QuantityContainer>
        <PriceInfo>{price} </PriceInfo>
        <RemoveButton onClick={()=> clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem : item => dispatch(clearItemFromCart(item)),
    addItem : item => dispatch(addItem(item)),
    removeItem : item => dispatch(removeItem(item))
});

export default connect(null,mapDispatchToProps)(CheckoutItem);
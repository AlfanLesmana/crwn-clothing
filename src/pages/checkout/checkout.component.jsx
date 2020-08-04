import React from 'react'
import './checkout.styles.scss'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectCartItems , selectCartTotal} from '../../redux/cart/cart.selector'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import {
    CheckoutContainer,
    HeaderBlockContainer,
    HeaderContainer,
    WarningContainer,
    TotalInfo,
} from './checkout-styles'

const CheckOutPage = ({cartItems,total}) => (
    <CheckoutContainer>
        <HeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </HeaderContainer>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )
        }
        <TotalInfo>
            <span> TOTAL: ${total} </span>
        </TotalInfo>
        <WarningContainer>
            *Please use the following test credit card for payment*
            <br/>
            4242 4242 4242 4242 - Exp: 10/20 - CVV: 123
        </WarningContainer>
        <StripeCheckoutButton price={total}/>
    </CheckoutContainer>
)

const mapStatetoProps = createStructuredSelector ({
    cartItems : selectCartItems,
    total : selectCartTotal

})

export default connect(mapStatetoProps)(CheckOutPage);
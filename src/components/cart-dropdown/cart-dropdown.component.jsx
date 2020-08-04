import React from 'react'
import {connect} from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import {selectCartItems} from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {
    CartDropDownContainer,
    CartItemsContainer,
    EmptyMessage} 
from './cart-dropdown.styles'

const CartDropdown = ({cartItems, history , dispatch}) => (
    <CartDropDownContainer>
        <CartItemsContainer>
        {
            cartItems.length > 0 ?
            cartItems.map(
                cartItem => (
                    <CartItem key= {cartItem.id} item = {cartItem} />
            ))
            :
            <EmptyMessage> Your cart is empty </EmptyMessage>
        }        
        </CartItemsContainer>
        <CustomButton onClick={ () => 
            {
                history.push('./checkout');
                dispatch(toggleCartHidden());
            }
        }
            >GO TO CHECKOUT
        </CustomButton>
    </CartDropDownContainer>
)

const mapStateToProps = createStructuredSelector ({
    cartItems : selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
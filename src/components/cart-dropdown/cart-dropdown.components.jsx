import React from 'react';

import CustomButton from '../custom-button/custom-button.compoent';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.length ?
            (cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            )))
            :
           ( <span className="empty-message"> Your cart is empty</span>)
        }
        </div>
        <div className='cart-items' />
        <CustomButton onClick={() => {
            history.push('./checkout');
        dispatch(toggleCartHidden()
        );
    }}> GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps = createStructuredSelector (
    {
        cartItems: selectCartItems
    }
);
export default withRouter(connect(mapStateToProps)(CartDropDown));
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart, randomSelect} = props;
    return (
        <div className='cart'>
            <h5>Total Product: {cart.length}</h5>
            {
                cart.map(product => 
                <div className='cartcontainer'>
                    <img src={product.img}alt="" />
                    <p>{product.name}</p> 
                </div>)
            }
            <button onClick={() => randomSelect(cart)}>Random Choose</button>
        </div>
    );
};

export default Cart;
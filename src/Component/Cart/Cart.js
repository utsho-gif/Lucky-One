import React from 'react';
import './Cart.css'
import {FaRandom} from 'react-icons/fa'

const Cart = (props) => {
    const {cart, randomSelect} = props;
    return (
        <div className='cart'>
            <h5>Total Product: {cart.length}</h5>
            {
                cart.map(product => 
                <div className='cartcontainer'>
                    <img src={product.img} alt="" />
                    <p>{product.name}</p> 
                </div>)
            }
            <button onClick={() => randomSelect(cart)}>Random <FaRandom></FaRandom></button>
        </div>
    );
};

export default Cart;
import React from 'react';
import './Product.css'
import {MdAddShoppingCart} from 'react-icons/md'

const Product = (props) => {
    const {handleCart, product} = props
    const {name, img, price} = product;
    return (
        <div className='product-container'>
            <img src= {img} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: ${price}</p>
            <div className='btn click'>
                <button onClick={() => handleCart(product)}>Cart <MdAddShoppingCart></MdAddShoppingCart> </button>
            </div>
        </div>
    );
};

export default Product;
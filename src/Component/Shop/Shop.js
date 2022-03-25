import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    const handleCart = (product) => {
        
    }



    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='container'>
          <div className='shop-container'>
              <div className='products-contaiener m-3'>
                    {
                       products.map(product => <Product product = {product} key = {product.id} handleCart = {handleCart}></Product>)
                    }
               </div>
               <div className='cart-container'>
                    <Cart></Cart>
               </div> 
          </div>
        </div>
          
    );
};

export default Shop;
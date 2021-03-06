import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const handleCart = (product) => {
        const newCart = [...cart, product]
        if(newCart.length > 4){
            
        }
        setCart(newCart)
    }
    const randomSelect = (cart) => {
      const random = cart[Math.floor(Math.random()*cart.length)];
      setCart([random])
      

    }


    const removeCart = (cart) => {
        console.log(cart);
        const remove = (cart.splice(0,cart.length));
        setCart([remove]);
    }

    


    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='container mt-5'>
          <div className='shop-container'>
              <div className='products-contaiener m-3'>
                    {
                       products.map(product => <Product product = {product} key = {product.id} handleCart = {handleCart}></Product>)
                    }
               </div>
               <div className='cart-container'>
                    <Cart cart = {cart} randomSelect = {randomSelect} removeCart = {removeCart}></Cart>
               </div> 
          </div>
        </div>
          
    );
};

export default Shop;
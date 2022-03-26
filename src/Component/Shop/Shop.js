import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [random, setRandom] = useState([])

    const handleCart = (product) => {
        const newCart = [...cart, product]
        if(newCart.length > 4){
            
        }
        setCart(newCart)
    }
    const randomSelect = (cart) => {
      
      const  randomCart = [...cart]
      const rendomEle =  Math.floor((Math.random) * randomCart -1)
      console.log(rendomEle);
      setCart(rendomEle);

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
                    <Cart cart = {cart} randomSelect = {randomSelect}></Cart>
               </div> 
          </div>
        </div>
          
    );
};

export default Shop;
import React, { createContext, useEffect, useState } from 'react';
import {getProducts} from '../products';

export const ShopContext=createContext(null);

export const ShopContextProvider = (props) => {
    const [cartItems,setCartItems]=useState({});
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        async function fetchData() {
            try {
                const productsArray = await getProducts(); // Use await to fetch products
                setProducts(productsArray);
                setCartItems(getDefaultCart(productsArray));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchData();
    },[]);

    const getDefaultCart=(products)=>{
        let cart={};
        for(let i=1;i<products.length+1;i++){
            cart[i]=0;
        }
        return cart;
    }

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=products.find((product)=>product.id===Number(item));
                totalAmount+=cartItems[item]*itemInfo.price;
            }
        }
        return totalAmount;
    }

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }

    const updateCartItemCount=(newAmount,itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:newAmount}));
    }

    const contextValues={cartItems,addToCart,removeFromCart,updateCartItemCount,getTotalCartAmount};

  return (
    <ShopContext.Provider value={contextValues}>{props.children}</ShopContext.Provider>
  )
}



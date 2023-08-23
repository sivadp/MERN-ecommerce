import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import {ImageComponent} from '../../components/imageRender';

export const CartItem= (props) => {
    const {id,productName,price,productImage}=props.data;
    const {cartItems , addToCart, removeFromCart,updateCartItemCount} = useContext(ShopContext)
  return (
    <div className='cartItem'>
      <ImageComponent productImage={productImage} />
      <div className='description'>
        <p><b>{productName}</b></p>
        <p>{price} Rs</p>
        <div className='countHandler'>
            <button onClick={()=>removeFromCart(id)}> - </button>
            <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}/>
            <button onClick={()=>addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  )
}


import React, { useContext } from "react";
import {ShopContext} from "../../context/shop-context";
import {ImageComponent} from '../../components/imageRender'

export const Product=(props)=>{
    const {id,productName, price,productImage}=props.data;
    const {addToCart, cartItems}=useContext(ShopContext);
    const cartItemCount=cartItems[id];

    return (<div className="product" key={id}>
        <ImageComponent productImage={productImage} />
        <div className="description">
            <p><b>{productName}</b></p>
            <p>{price} Rs</p>
        </div>
        <button className="addToCartBttn" onClick={()=>addToCart(id)}>
            Add to cart {cartItemCount>0&& <>({cartItemCount})</>}
        </button>
    </div>)
}
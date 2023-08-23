import React, { useContext,useEffect,useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../products";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((productsArray) => {
      setProducts(productsArray);
    });
  }, []); 

  return (
    <div className="cart">
      <div>
        <h1>your cart Items</h1>
      </div>
      <div className="cartItems">
      {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
          return null; // Return null if not rendering the component
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: {totalAmount} Rs</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

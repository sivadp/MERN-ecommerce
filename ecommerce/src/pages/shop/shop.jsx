import React, { useEffect, useState } from "react";
import { getProducts } from "../../products"; 
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(productsArray => {
      setProducts(productsArray);
    });
  }, []);
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Electro Mart</h1>
      </div>
      <div className="products">
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

import React from 'react';

export function ImageComponent({ productImage }) {  
  return (
    <div>
      <img src={`data:image/jpeg;base64,${productImage}`} alt="Product" />
    </div>
  );
}



import React from "react";
import { useState } from "react";



function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  
    const addToCart = () => {
      setInCart(true);
    }
  
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>
        Add to Cart</button>
    </li>
  );
}

export default Item;

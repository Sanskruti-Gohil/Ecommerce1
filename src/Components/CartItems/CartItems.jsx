import React from 'react';
import './CartItems.css';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  // Ensure all_product and cartItems are defined and have values
  if (!all_product || all_product.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className='cartitems'>
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {/* Iterate over the products */}
      {all_product.map((e) => {
        // Safely check if cartItems[e.id] exists and is greater than 0
        if (e && e.id && cartItems && cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img src={e.image} alt={e.name} className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img src={remove_icon} onClick={() => removeFromCart(e.id)} alt="Remove from cart" />
              </div>
              <hr />
            </div>
          );
        } else {
          return null; // Skip items that don't exist or have no quantity in cart
        }
      })}
    </div>
  );
};

export default CartItems;

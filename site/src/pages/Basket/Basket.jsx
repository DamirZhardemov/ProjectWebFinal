import React, { useState, useEffect } from 'react';
import Product from '../../components/Product'; 

const Basket = () => {
    const initialBasket = JSON.parse(localStorage.getItem('Basket')) || [];
    const [basketItems, setBasketItems] = useState(initialBasket);
  
    useEffect(() => {
      localStorage.setItem('Basket', JSON.stringify(basketItems));
    }, [basketItems]);
  
    const calculateTotalPrice = () => {
        const totalPrice = basketItems.reduce((total, item) => total + item.price, 0);
        return parseFloat(totalPrice.toFixed(2)); 
      };
      
  
    const handleQuantityChange = (productId, newQuantity) => {
      setBasketItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    };
  
    const handleRemoveFromBasket = (productId) => {
      setBasketItems(prevItems =>
        prevItems.filter(item => item.id !== productId)
      );
    };
  
    return (
      <div className='container border border-1 my-2 p-5'>
        <h2>Your Basket</h2>
        {basketItems.length === 0 ? (
          <p>Your basket is empty.</p>
        ) : (
          <div className='container row'>
            {basketItems.map(item => (
              <Product
                key={item.id}
                imageUrl={item.imageUrl}
                productName={item.productName}
                description={item.description}
                price={item.price}
                quantity={item.quantity}
                onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
                onRemove={() => handleRemoveFromBasket(item.id)}
              />
            ))}
          </div>
        )}
        <p>Total Price: ${calculateTotalPrice()}</p>
      </div>
    );
  };
  
  export default Basket;
  
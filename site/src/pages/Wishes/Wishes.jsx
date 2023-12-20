import React, { useState, useEffect } from 'react';
import Product from '../../components/Product';

const Wishes = () => {
  const initialWishes = JSON.parse(localStorage.getItem('Wishes')) || [];
  const [wishesItems, setWishesItems] = useState(initialWishes);

  useEffect(() => {
    localStorage.setItem('Wishes', JSON.stringify(wishesItems));
  }, [wishesItems]);

  const handleRemoveFromWishes = (productId) => {
    setWishesItems(prevItems =>
      prevItems.filter(item => item.id !== productId)
    );
  };

  return (
    <div className='container border border-1 my-2 p-5'>
      <h2>Wishes</h2>
      {wishesItems.length === 0 ? (
        <p>No wishes available.</p>
      ) : (
        <div>
          {wishesItems.map(item => (
            <Product
              key={item.id}
              imageUrl={item.imageUrl}
              productName={item.productName}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
              onRemove={() => handleRemoveFromWishes(item.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishes;

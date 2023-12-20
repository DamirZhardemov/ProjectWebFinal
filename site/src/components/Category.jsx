// CategoryCard.jsx
import React from 'react';

const Category = ({ imageUrl, categoryName }) => {
  return (
    <div className="col-md me-auto">
      <div className="category-card">
        <img src={imageUrl} alt={categoryName} />
        <h3>{categoryName}</h3>
      </div>
    </div>
  );
}

export default Category;

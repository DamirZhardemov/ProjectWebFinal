import React, { useState, useEffect } from 'react';
import Product from './Product';
const RecommendedProducts = () => {
    const [recommendedProductsData, setRecommendedProductsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/products.json');
                const data = await response.json();
                setRecommendedProductsData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="container row justify-content-center">

            {recommendedProductsData.map(product => (
                <Product
                    key={product.id}
                    id = {product.id}
                    imageUrl={product.imageUrl}
                    productName={product.productName}
                    description={product.description}
                    price={product.price}
                />
            ))}

        </div>
    );
}

export default RecommendedProducts;

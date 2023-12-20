import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/Product'; 

const Catalog = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/products.json');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                <div className="product-list container row mx-auto">
                    <h2>Catalog</h2>
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            id = {product.id}
                            imageUrl={product.imageUrl}
                            productName={product.productName}
                            description={product.description}
                            price={product.price}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Catalog;

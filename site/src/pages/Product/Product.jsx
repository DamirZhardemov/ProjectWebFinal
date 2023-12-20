import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/data/products.json`); 
                const data = await response.json();
                const selectedProduct = data.find(product => product.id === parseInt(id, 10));

                setProduct(selectedProduct);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div>
            {product ? (
                <div className='container row mx-auto my-5'>
                    <div className="col-md-6">
                        <img src={product.imageUrl} alt={product.productName} className='img-fluid w-100'/>

                    </div>
                    <div className="col md-6">
                        <h2>{product.productName}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price.toFixed(2)}</p>
                    </div>
                    {}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Product;

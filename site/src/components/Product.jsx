import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Product = ({ id, imageUrl, productName, description, price }) => {
    const { key } = useParams();
    const [isInBasket, setIsInBasket] = useState(false);
    const [isInWishes, setIsInWishes] = useState(false);

    useEffect(() => {
        const basketItems = JSON.parse(localStorage.getItem('Basket')) || [];
        const isProductInBasket = basketItems.some(item => item.productName === productName);
        setIsInBasket(isProductInBasket);

        const wishesItems = JSON.parse(localStorage.getItem('Wishes')) || [];
        const isProductInWishes = wishesItems.some(item => item.productName === productName);
        setIsInWishes(isProductInWishes);
    }, [productName]);

    const handleAddToBasket = () => {
        const basketItems = JSON.parse(localStorage.getItem('Basket')) || [];
        basketItems.push({ productName, price, imageUrl, description });
        localStorage.setItem('Basket', JSON.stringify(basketItems));

        setIsInBasket(true);
    };

    const handleAddToWishes = () => {
        const wishesItems = JSON.parse(localStorage.getItem('Wishes')) || [];
        wishesItems.push({ productName, price, imageUrl, description });
        localStorage.setItem('Wishes', JSON.stringify(wishesItems));

        setIsInWishes(true);
    };

    const handleDeleteFromBasket = () => {
        const basketItems = JSON.parse(localStorage.getItem('Basket')) || [];
        const updatedBasket = basketItems.filter(item => item.productName !== productName);
        localStorage.setItem('Basket', JSON.stringify(updatedBasket));

        setIsInBasket(false);
    };

    const handleDeleteFromWishes = () => {
        const wishesItems = JSON.parse(localStorage.getItem('Wishes')) || [];
        const updatedWishes = wishesItems.filter(item => item.productName !== productName);
        localStorage.setItem('Wishes', JSON.stringify(updatedWishes));

        setIsInWishes(false);
    };

    return (
        <div className="col-md-3 me-auto mt-2">
            <div className="card" style={{ width: '18rem' }}>
                <Link to={`/catalog/${id}`}>
                    <img src={imageUrl} className="card-img-top" alt="Product Image" />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{productName}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Price: {price}</li>
                </ul>
                <div className="card-body d-flex flex-row">
                    {isInBasket ? (
                        <button className="btn btn-danger" onClick={handleDeleteFromBasket}>
                            Delete from Basket
                        </button>
                    ) : (
                        <button className="btn btn-primary" onClick={handleAddToBasket}>
                            Add to Basket
                        </button>
                    )}
                    {isInWishes ? (
                        <button className="btn btn-danger ms-2" onClick={handleDeleteFromWishes}>
                            Delete from Wishes
                        </button>
                    ) : (
                        <button className="btn btn-secondary ms-2" onClick={handleAddToWishes}>
                            Add to Wishes
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;

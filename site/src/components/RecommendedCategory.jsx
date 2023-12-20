import React, { useState, useEffect } from 'react';
import Category from './Category';
const PopularCategories = () => {
    const [popularCategoriesData, setPopularCategoriesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/categories.json');
                const data = await response.json();
                setPopularCategoriesData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="container row justify-content-center">
            {popularCategoriesData.map(category => (
                <Category
                    key={category.id}
                    imageUrl={category.imageUrl}
                    categoryName={category.categoryName}
                />
            ))}
        </div>
    );
}

export default PopularCategories;

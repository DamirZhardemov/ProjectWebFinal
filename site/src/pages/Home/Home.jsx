import React, { useEffect, useState } from 'react';
import Slider from '../../components/Slider'
import RecommendedProducts from '../../components/RecommendedProducts'
import PopularCategories from '../../components/RecommendedCategory'

const Home = () => {
    return (
        <main>
            <div className="container mt-5">
                <section className="carousel-section">
                    <Slider />
                </section>

                <section className="recommended-products-section">
                    <h2>Recommended Products</h2>
                    <RecommendedProducts />
                </section>

                <section className="popular-categories-section">
                    <h2>Popular Categories</h2>
                    <PopularCategories />
                </section>
            </div >
        </main>
    );

}

export default Home
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Loo corp</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog/">Catalog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile/">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/basket/">Basket</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/wishes/">Wishes</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
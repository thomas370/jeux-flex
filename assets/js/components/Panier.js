import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import '../../styles/panier.css';

const Panier = () => {
    return (
        <div>
            <Nav />
            <div className="shop_container">
                <div className="shop_container_left">
                    <h2>Informations de livraison</h2>
                </div>
                <div className="shop_container_right">
                    <h2>Votre Panier</h2>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Panier;

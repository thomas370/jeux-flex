import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import '../../styles/Panier.css';

const Panier = () => {
    const [panier, setPanier] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  
    return (
        <div>
            <Nav />
            <div className="panier_container">
                <div className="Adresse_livre">
                    <h1>Adresse de livraison</h1> 
                    <label>
                        <input type="text" placeholder='adresse e-mail' />
                    </label>
                </div>
                <div className="payment">
                    <h1>Moyen de paymant</h1> 
                    <label>
                        <input type="text" placeholder='carte banquere' />
                    </label>
                </div>
                <div className="panier">
                    <h1>Vos Articles</h1> 
                    <div className="panier_article">
                        {panier.map((article, index) => (
                            <div className="panier_article_container" key={index}>
                                    <img src={article.images} alt={article.name} />
                                <div className="panier_article_info">
                                    <h2>{article.name}</h2>
                                    <p>{article.prix}€</p>
                                    <Link to={`/jeux/${article.id}`}>
                                        <button>voir le jeux</button>
                                    </Link>
                                </div>
                            </div>
                        ))}      
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default Panier;
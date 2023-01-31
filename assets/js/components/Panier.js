import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import '../../styles/Panier.css';

const Panier = () => {
  const [panier, setPanier] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const handleDelete = (id) => {
    const itemIndex = panier.findIndex((item) => item.id === id);
    if (itemIndex === -1) return;
    const newPanier = [...panier];
    newPanier.splice(itemIndex, 1);
    setPanier(newPanier);
    localStorage.setItem("cart", JSON.stringify(newPanier));
  };

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
            {panier.map((article, id) => (
              <div className="panier_article_container" key={article.id}>
                <img src={article.images} alt={article.name} />
                <div className="panier_article_info">
                  <h2>{article.name}</h2>
                  <p>{article.prix}€</p>
                  <Link to={`/fiches/${article.id}`}>
                    <button>voir le jeux</button>
                  </Link>
                  <button onClick={() => handleDelete(article.id)}>suprimer</button>
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
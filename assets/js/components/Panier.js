import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Nav from "./Nav";
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

  const handlePlus = (quantity) => {
    const newPanier = [...panier];
    newPanier.map((item) => {
      if (item.quantity === quantity) {
        item.quantity = item.quantity + 1;
      }
    });
    setPanier(newPanier);
    localStorage.setItem("cart", JSON.stringify(newPanier));
  };

  const handleMoins = (quantity) => {
    const newPanier = [...panier];
    newPanier.map((item) => {
      if (item.quantity === quantity) { 
        if (item.quantity > 1) {
          item.quantity = item.quantity - 1;
        }
      }
    });
    setPanier(newPanier);
    localStorage.setItem("cart", JSON.stringify(newPanier));
  };

  return (
    <div>
      <Nav />
      <div className="container_card">
          <div className="cards">
            <h2>Votre panier</h2>
            {panier.length === 0 && <p>Votre panier est vide</p>}
            {panier.map((item) => (
              <div className="card_item" key={item.id}>
                <div className="card_item_img">
                  <img src={item.images} alt={item.name} />
                </div>
                <div className="card_item_content">
                  <h3>{item.name}</h3>
                  <div className='plusOuMois'>
                    <button onClick={() => handleMoins(item.quantity)}>-</button>
                    <p>{item.quantity}</p>
                    <button onClick={() => handlePlus(item.quantity)}>+</button>
                  </div>
                  <p>{item.prix} €</p>
                  <button onClick={() => handleDelete(item.id)}>Supprimer</button>
                </div>
              </div>
            ))}
        </div>
        <div className='card_global'>
          <div className="card_total">
            <p>{panier.reduce((acc, item) => acc + item.quantity, 0)} articles</p>  {/* nombres d'article dans le panier */}
            <p>{Math.round(panier.reduce((acc, item) => acc + item.prix * item.quantity, 0) * 100) / 100} €</p>
          </div>
          <div className="card_shipping">
            <p>Frais de port</p>
            <p>Gratuit</p>
          </div>
          <div className="card_tax">
            <p>Tax 20%</p>
            <p>{Math.round(panier.reduce((acc, item) => acc + item.prix * item.quantity, 0) * 0.20 * 100) / 100} €</p>
          </div>
          <div className="card_Total_after_tax">
            <p>Total</p>
            <p>{Math.round((panier.reduce((acc, item) => acc + item.prix * item.quantity, 0) + panier.reduce((acc, item) => acc + item.prix, 0) * 0.20) * 100) / 100} €</p>
          </div>
          <button>Comander</button>
          <p>OU</p>
            <Link to="/"><p>Continuer mes achats</p></Link>
        </div>
      </div>
    </div>
  );
};

export default Panier;
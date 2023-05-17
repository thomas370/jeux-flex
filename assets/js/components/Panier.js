import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Nav from "./Nav";
import '../../styles/Panier.css';

const Panier = () => {
  const [panier, setPanier] = useState(JSON.parse(localStorage.getItem('cart')) || []); // on récupère le panier dans le localstorage

  const handleDelete = (id) => { // fonction pour supprimer un jeu du panier
    const itemIndex = panier.findIndex((item) => item.id === id); // on récupère l'index du jeu à supprimer
    if (itemIndex === -1) return; // si l'index n'existe pas on sort de la fonction
    const newPanier = [...panier]; // on copie le panier
    const updatedPanier = newPanier.filter((item, index) => index !== itemIndex); // on supprime le jeu du panier
    setPanier(updatedPanier); // on met à jour le panier
    localStorage.setItem("cart", JSON.stringify(updatedPanier)); // on envoie les données dans le localstorage
  };

  const handlePlus = (quantity) => { // fonction pour ajouter une quantité au jeu
    const newPanier = panier.map((item) => { // on map le panier
      if (item.quantity === quantity) { // si la quantité est égale à la quantité du jeu
        return { // on retourne le jeu avec la quantité +1
          ...item,
          quantity: item.quantity + 1, // on ajoute +1 à la quantité
        };
      }
      return item;
    });

    setPanier(newPanier); // on met à jour le panier
    localStorage.setItem("cart", JSON.stringify(newPanier)); // on envoie les données dans le localstorage
  };

  const handleMoins = (quantity) => { // fonction pour supprimer une quantité au jeu
    const newPanier = panier.map((item) => { // on map le panier
      if (item.quantity === quantity && item.quantity > 1) { // si la quantité est égale à la quantité du jeu et que la quantité est supérieur à 1
        return { // on retourne le jeu avec la quantité -1
          ...item,
          quantity: item.quantity - 1, // on supprime -1 à la quantité
        };
      }
      return item;
    });

    setPanier(newPanier); // on met à jour le panier
    localStorage.setItem("cart", JSON.stringify(newPanier)); // on envoie les données dans le localstorage
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
            <p>{Math.round(panier.reduce((acc, item) => acc + item.prix * item.quantity, 0) * 100) / 100} €</p> {/* prix total du panier */}
          </div>
          <div className="card_shipping">
            <p>Frais de port</p>
            <p>Gratuit</p>
          </div>
          <div className="card_tax">
            <p>Tax 20%</p>
            <p>{Math.round(panier.reduce((acc, item) => acc + item.prix * item.quantity, 0) * 0.20 * 100) / 100} €</p> {/* taxe de 20% */}
          </div>
          <div className="card_Total_after_tax">
            <p>Total</p>
            <p>{Math.round((panier.reduce((acc, item) => acc + item.prix * item.quantity, 0) + panier.reduce((acc, item) => acc + item.prix, 0) * 0.20) * 100) / 100} €</p>
              {/* prix total du panier + taxe */}
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
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../styles/Fiches.css";
import Nav from "./Nav";
import Footer from "./Footer";

const Fiches = () => {
    const { id } = useParams();
    const [game, setGame] = useState({});
    const [cart, setCart] = useState([]);
    const [added, setAdded] = React.useState(false);
    const navigate = useNavigate();

    useEffect(() => {// récupérer les données de l'api pour les afficher sur la page de la fiche du jeu
        const fetchGames = async () => {
            const response = await fetch(`http://localhost:8000/api/jeuxes/${id}`);
            const data = await response.json();
            setGame(data);
        };
           fetchGames();
    }, [id]);

    const handleAddToCart = () => {
        if(localStorage.getItem("token") === null) {
            navigate('/LoginUser'); //si l'utilisateur n'ai pas connecter rediriger l'utilisateur vers la page de connexion
        } else {
        const newCart = JSON.parse(localStorage.getItem("cart")) || []; // si le panier est vide on le créer
        const itemInCart = newCart.find((item) => item.id === game.id);// si l'item est déjà dans le panier on ajoute +1 à la quantité
        if (itemInCart) { 
            itemInCart.quantity++;
        } else {
            newCart.push({
                ...game,
                quantity: 1,
            });
        }
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart)); // on envoie les données dans le localstorage
        console.log(cart);
        setAdded(true) // on affiche le message d'ajout au panier
                }
            };
    };

    return (
            <div>
                <Nav />
                <div className="shadow">
                    <img loading="lazy" src={game.images_fond} alt=""/>
                </div>
                <div className="container">
                    <div className="row">
                        <img loading="lazy" src={game.images} alt=""/>
                        <div className={"info"}>
                            <h2>{game.name}</h2>
                            <div className={"plat"}>
                                <p>Disponible sur : {game.id_plat?.platform}</p>
                                <p>Il y a {game.stock} jeux de disponible</p>
                                <p>Téléchargement digital</p>
                            </div>
                                <div className={"prix"}>
                                    <p>- {game.reduction} %</p>
                                    <h4>{game.prix}€</h4>
                                </div>
                            <div className={"btn-add"}>
                                <button onClick={handleAddToCart}> Ajouter au panier</button>
                                <div className={`ajouterpanier ${added ? '' : 'hidden'}`}>
                                    <p>L'article a étes Ajouté au panier</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"descriptions"}>
                    <div className={'description'}>
                        <h2>Description</h2>
                        <p>{game.description}</p>
                    </div>
                    <div className={'video'}>
                        <h2>Video</h2>
                        <video loading="eager" id={"video" } src={game.video} controls={false} autoPlay={true} loop={true} muted={true} />
                    </div>
                <Footer />
            </div>
        </div>
    )
}

export default Fiches

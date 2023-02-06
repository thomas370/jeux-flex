import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/Fiches.css";
import Nav from "./Nav";
import Footer from "./Footer";

const Fiches = () => {
    const { id } = useParams();
    const [game, setGame] = useState({});
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            const response = await fetch(`http://localhost:8000/api/jeuxes/${id}`);
            const data = await response.json();
            setGame(data);
        };
        fetchGames();
    }, [id]);

    const handleAddToCart = () => {
        const newCart = JSON.parse(localStorage.getItem("cart")) || [];
        const itemInCart = newCart.find((item) => item.id === game.id);
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            newCart.push({
                ...game,
                quantity: 1,
            });
        }
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
        console.log(cart);
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
                            <div className={"btn"}>
                                <button onClick={handleAddToCart}> Ajouter au panier</button>
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

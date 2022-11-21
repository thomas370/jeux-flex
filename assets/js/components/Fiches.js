import React, {useEffect, useState} from 'react';
import '../../styles/Fiches.css';
import Nav from "./Nav";
import Footer from "./Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {useParams} from "react-router-dom";
import Avis from "./Avis";


const Fiches = () => {
    const {id} = useParams();

    const [game, setGame] = useState({});
    const fetchGames = async () => {
        const response = await fetch('http://localhost:8000/api/jeuxes/' + id);
        const data = await response.json();
        console.log(data)
        setGame(data);
    }
    useEffect(() => {fetchGames()}, []);
    useEffect(() => {console.log(game)}, [game]);

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
                                <button><FontAwesomeIcon icon={faCartShopping} /></button>
                                <button>Acheter maintenant</button>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className={'description'}>
                        <h2>Description</h2>
                        <p>{game.description}</p>
                    </div>
                    <div className={'video'}>
                        <h2>Video</h2>
                        <video loading="eager" id={"video" } src={game.video} controls={false} autoPlay={true} loop={true} muted={true} />
                    </div>
                <Avis />
                <Footer />
            </div>
    )
}

export default Fiches

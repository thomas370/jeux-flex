import React, {useRef, useEffect} from 'react';
import '../../styles/Cards.css';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';


const Card = ({game}) => {
    const myRef = useRef(null);

    useEffect(() => {// on récupère les données du local storage et on les stocke dans la variable fav ou un tableau vide si il n'y a rien
        const fav = JSON.parse(window.localStorage.getItem("fav")) || [];

        if (myRef.current && fav.some((favGame) => favGame.id === game.id)) { // si le jeu est dans le local storage on ajoute la classe heart-red
            myRef.current.classList.add("heart-red");
        }
    }, [game]);

    const handleClick = (game, ref) => {
        const fav = JSON.parse(window.localStorage.getItem("fav")) || []; // on récupère les données du local storage et on les stocke dans la variable fav ou un tableau vide si il n'y a rien

        const index = fav.findIndex((favGame) => favGame.id === game.id);// on cherche si le jeu est dans le local storage

        if(index !== -1) {
            ref.current.classList.remove("heart-red"); // si le jeu est dans le local storage on supprime la classe heart-red
            const newFav = fav.filter((item) => item.id !== game.id);
            window.localStorage.setItem("fav", JSON.stringify(newFav));// on supprime le jeu du local storage
        } else {
            ref.current.classList.add("heart-red");// si le jeu n'est pas dans le local storage on ajoute la classe heart-red
            fav.push(game);
            window.localStorage.setItem("fav", JSON.stringify(fav));// on ajoute le jeu dans le local storage
        }
    };

    return (
        game &&
        <div className={"Containerisation"}>
            <div className={"Card"}>
                <Link key={game.id} to={'/fiches/' + game.id}>
                    <div className={`card`}>
                        <div className={"reduc"}>
                            <p>-{game.reduction}%</p>
                        </div>
                        <video loading="eager" id={"video"} src={game.video} controls={false} autoPlay={true}
                               loop={true} muted={true}/>
                        <img loading="eager" id={"image"} src={game.images} alt="image du jeux"/>
                    </div>
                </Link>
                <div className={"name_price"}>
                    <p ref={myRef} data-id={game.id} onClick={() => handleClick(game, myRef)}><FontAwesomeIcon icon={faHeart}/></p>
                    <h2>{game.name}</h2>
                    <p>{game.prix}€</p>
                </div>
            </div>
        </div>
    );
};

export default Card;

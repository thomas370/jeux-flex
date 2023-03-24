import React, { useRef, useState } from 'react';
import '../../styles/Cards.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


const Card = ({ game }) => {
    const myRef = useRef(null);
  
    // set le coeur en rouge si le jeu est dans le localStorage au moment de la connexion
    const [fav, setFav] = useState(() => {
      const fav = JSON.parse(window.localStorage.getItem("fav")) || [];
      const index = fav.findIndex((favGame) => favGame.id === game.id);
      return index !== -1;
    });
  
    const handleClick = (game, ref) => {
      console.log(game);
      const fav = JSON.parse(window.localStorage.getItem("fav")) || [];
  
      const index = fav.findIndex((favGame) => favGame.id === game.id);
  
      if (index !== -1) {
        ref.current.classList.remove("heart-red");
        const newFav = fav.filter((item) => item.id !== game.id);
        window.localStorage.setItem("fav", JSON.stringify(newFav));
      } else {
        ref.current.classList.add("heart-red");
        fav.push(game);
        window.localStorage.setItem("fav", JSON.stringify(fav));
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
                        <video loading="eager" id={"video" } src={game.video} controls={false} autoPlay={true} loop={true} muted={true} />
                        <img loading="eager" id={"image" } src={game.images} alt="image du jeux" />
                    </div>
                </Link>
                        <div className={"name_price"}>
                        <p ref={myRef} onClick={() => handleClick(game,myRef)}><FontAwesomeIcon icon={faHeart} /></p>
                            <h2>{game.name}</h2>
                            <p>{game.prix}€</p>
                        </div>
                </div>
            </div>
    );
};

export default Card;

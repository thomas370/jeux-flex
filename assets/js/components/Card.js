import React from 'react';
import '../../styles/Cards.css';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


const Card = ({game}) => {
    return (
        game &&
            <div className={"Containerisation"}>
                <div className={"Cards"}>
                <Link key={game.id} to={'/fiches/' + game.id}>
                    <div className={`card`}>
                        <div className={"reduc"}>
                            <p>-{game.reduction}%</p>
                        </div>
                        <video loading="eager" id={"video" } src={game.video} controls={false} autoPlay={true} loop={true} muted={true} />
                        <img loading="eager" id={"image" } src={game.images} alt="" />
                    </div>
                </Link>
                        <div className={"name_price"}>
                            <p><FontAwesomeIcon icon={faHeart} /></p>
                            <h2>{game.name}</h2>
                            <p>{game.prix}€</p>
                        </div>
                </div>
            </div>
    );
};

export default Card;

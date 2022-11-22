import React from 'react';
import '../../styles/Cards.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";


const Card = ({game}) => {

    function heart(){
        onclick = <FontAwesomeIcon icon={faHeart} color={"red"}/>
    }
    return (
        game &&
            <div className={"Containerisation"}>
                <div className={"Cards"}>
                    <div className={`card`}>
                        <div className={"reduc"}>
                            <p>-{game.reduction}%</p>
                        </div>
                        <video loading="eager" id={"video" } src={game.video} controls={false} autoPlay={true} loop={true} muted={true} />
                        <img loading="eager" id={"image" } src={game.images} alt="" />
                    </div>
                        <div className={"name_price"}>
                            <h2>{game.name}</h2>
                            <p>{game.prix}€</p>
                        </div>
                </div>
            </div>
    );
};

export default Card;

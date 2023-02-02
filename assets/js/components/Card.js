import React, { useRef } from 'react';
import '../../styles/Cards.css';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const handleClick = (id,ref) => {
    console.log(id)
 if(ref.current.classList.contains("heart-red")){
        ref.current.classList.remove("heart-red")
    }else{
        ref.current.classList.add("heart-red")
        //validé la mise en favoris par une phrase en desous de la card
    }
} 

const Card = ({game}) => {
    const myRef = useRef(null)
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
                        <img loading="eager" id={"image" } src={game.images} alt="" />
                    </div>
                </Link>
                        <div className={"name_price"}>
                        <p ref={myRef} onClick={() => handleClick(game.id,myRef)}><FontAwesomeIcon icon={faHeart} /></p>
                            <h2>{game.name}</h2>
                            <p>{game.prix}€</p>
                        </div>
                </div>
            </div>
    );
};

export default Card;

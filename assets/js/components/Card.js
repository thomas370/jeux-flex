import React from 'react';


const Card = ({game}) => {
    return (
        game &&
            <div className={"Containerisation"}>
                <div className={"Cards"}>
                    <div className={"card"}>
                        <div className={"reduc"}>
                            <p>-{game.reduction}%</p>
                        </div>
                        <img src={game.images} alt={""}></img>
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

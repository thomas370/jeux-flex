import React from 'react';
import '../../styles/Banner.css';

const Banner = ({game}) => {
    return (
       <div className={'banner'}>
              <div className={'banner_container'}>
                    <div className={'banner_text'}>
                        <div className={'banner_service'}>
                        <h2>{game.length} jeux</h2>
                        <h3>Disponible suivant le stock</h3>
                        </div>
                        <div className={'banner_service'}>
                        <h2>à partir de 5€</h2>
                        <h3>Toujours a petit prix</h3>
                        </div>
                        <div className={'banner_service'}>
                            <h2>Service client</h2>
                            <h3>Conseillers disponibles 24/7</h3>
                        </div>
                    </div>
              </div>
       </div>
    );
};

export default Banner;
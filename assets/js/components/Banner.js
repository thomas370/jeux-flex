import React from 'react';


const Banner = ({game}) => {
    return (
       <div className={'banner'}>
              <div className={'banner_container'}>
                    <div className={'banner_text'}>
                        <h2>{game.length} jeux</h2>
                        <h2>à partir de 5€</h2>
                        <div className={'banner_service'}>
                            <h2>Service client</h2>
                            <p>Conseillers disponibles 24/7</p>
                        </div>
                    </div>
              </div>
       </div>
    );
};

export default Banner;
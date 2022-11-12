import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="banner">
                <div className="banner-content">
                    <div className="counter">
                        <h2>nombres de jeux disponible</h2>
                        <p>100</p>
                    </div>

                    <div className="commentaire">
                        <h2>Avis</h2>
                        <p>Jeux-Flex est un site de vente de jeux vidéo en ligne.</p>
                            <p>Il est spécialisé dans la vente de jeux vidéo pour PC, PlayStation, Xbox, Nintendo Switch et mobile.</p>
                                <p>Il est également possible d'y acheter des cartes cadeaux pour les différentes plateformes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

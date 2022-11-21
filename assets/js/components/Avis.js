import React from 'react';


const Avis = ({Avis}) => {
    return (
        Avis &&
        <div className={"Containerisation"}>
            <div className={"avi"}>
                <div className={"avis"}>
                    <h2>Avis</h2>
                    <h3>{avis.pseudo}</h3>
                    <p>{avis.avis}</p>
                </div>
            </div>
        </div>
    );
};

export default Avis;

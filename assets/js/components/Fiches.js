import React from 'react';
import Nav from "./Nav";
import Footer from "./Footer";

const Fiches = ({game}) => {
    return (
        game &&
            <div>
                <Nav />
                <img src={game.images} alt={""}></img>
                <Footer />
            </div>
    );
}

export default Fiches;

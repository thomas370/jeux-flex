import React, {useEffect, useState} from 'react';
import Header from './Header';
import Nav from "./Nav";
import Card from "./Card";
import Banner from "./Banner";
import Footer from "./Footer";
import {Link} from "react-router-dom";



const Home = () => {
    const [games, setGames] = useState([]);
    const fetchGames = async () => {
        const response = await fetch('http://localhost:8000/api/jeuxes');
        const data = await response.json();
        console.log(data)
        setGames(data['hydra:member']);
    }

    useEffect(() => {fetchGames()}, []);
    useEffect(() => {console.log(games)}, [games]);

    return (
        <div>
            <Nav />
            <Header />
            <div className={"Containerisation"}>
                    {games.map(game =>  <Link to={'/fiches/' + game.id}> <Card key={game.id} game={game} /> </Link>)}
            </div>
            <Banner game={games} />
            <div className={'moin_cher'}>
                <h2>Les jeux les moin chers</h2>
            </div>
            <div className={"Containerisation"}>
                {games.sort((a, b) => a.prix - b.prix).slice(0, 6).map(game => <Link to={'/fiches/' + game.id}> <Card game={game} key={game.id} /> </Link>)}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
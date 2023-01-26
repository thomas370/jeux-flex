import React, {useEffect, useState} from 'react';
import Header from './Header';
import Nav from "./Nav";
import Banner from "./Banner";
import Footer from "./Footer";
import {Link} from "react-router-dom";

const Card = React.lazy(() => import('./Card'));

const Home = () => {
    const [games, setGames] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    const fetchGames = async () => {
        const response = await fetch('http://localhost:8000/api/jeuxes');
        const data = await response.json();
        console.log(data)
        setGames(data['hydra:member']);
        console.log(games)
    }

    useEffect(() => {fetchGames()}, []);
    useEffect(() => {setSearchResult(games)}, [games]);

    return (
        <div>
            <Nav />
            <Header searchResult={searchResult} games={games} setGames={setGames} setSearchResult={setSearchResult}/>
            <div className={'toutlesjeux'}>
                <h2>Tous nos jeux </h2>
            </div>
            <div className={"Containerisation"}>
                <React.Suspense fallback={<div>Loading...</div>}>
                    {searchResult.map(game => <Link key={game.id} to={'/fiches/' + game.id}> <Card game={game}  /> </Link>)}
                </React.Suspense>

            </div>
            <Banner game={searchResult} />
            <div className={'moin_cher'}>
                <h2>Les jeux les moin chers</h2>
            </div>
            <div className={"Containerisation"}>
                {games
                    .sort((a, b) => a.prix - b.prix)
                    .slice(0, 6)
                    .map(game => <Link key={game.id} to={'/fiches/' + game.id}> <Card game={game}  /> </Link>)}
            </div>
            <Footer />
        </div>
    )
};

export default Home;
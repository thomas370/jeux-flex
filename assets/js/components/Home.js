import React, {useEffect, useState} from 'react';
import Header from './Header';
import Nav from "./Nav";
import Footer from "./Footer";



const Card = React.lazy(() => import('./Card'));

const Home = () => {
    const [games, setGames] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    const fetchGames = async () => {
        const response = await fetch('http://localhost:8000/api/jeuxes');
        const data = await response.json();
        console.log(data)
        setGames(data['hydra:member']);
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
                    {searchResult.map(game => <Card key={game.id} game={game}/>)}
                </React.Suspense>
            </div>
            <Footer />
        </div>
    )
};

export default Home;
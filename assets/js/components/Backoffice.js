import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import '../../styles/Backoffice.css'
import Nav from "./Nav";

const Backoffice = () => {
    const Navigate = useNavigate();
    const [games, setGames] = useState([]);
    const [searchResult, setSearchResult] = useState([]);


    const fetchGames = async () => {
        const response = await fetch('http://localhost:8000/api/jeuxes');
        const data = await response.json();
        setGames(data['hydra:member']);
    }

    useEffect(() => {
        fetchGames();
    }, []);

    useEffect(() => {
        setSearchResult(games)
    }, [games]);


    //si le user n'a pas le role admin il est redirigé vers la page d'accueil
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            Navigate('/LoginUser');
        } else {
            const role = localStorage.getItem('role');
            if (role !== 'ROLE_ADMIN') {
                Navigate('/');
            }
        }
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Voulez-vous vraiment supprimer ce jeu ?")) {
            const response = await fetch(`http://localhost:8000/api/jeuxes/${id}`, {
                method: 'DELETE',
            });
            if (response.status === 204) {
                fetchGames();
            }
        }

        setGames(games.filter(game => game.id !== id));
    }

    return (
        <div>
            <Nav/>
            <div className="dalle">
                <h1>Backoffice</h1>
                <div className="flex">
                    <div className="search">
                        <input type="text" placeholder="Rechercher un jeu" onChange={(e) => {
                            setSearchResult(games.filter(game => game.name.toLowerCase().includes(e.target.value.toLowerCase())))
                        }}/>
                    </div>
                    <div className="add">
                        <Link to={'/AddGame'}>
                            <button>Ajouter un jeu</button>
                        </Link>
                    </div>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Titre</th>
                        <th>Genre</th>
                        <th>Plateforme</th>
                        <th>Editeur</th>
                        <th>Année</th>
                        <th>Prix</th>
                        <th>reduction</th>
                        <th>Stock</th>
                        <th>Image</th>
                        <th>Modifier</th>
                        <th>Supprimer</th>
                    </tr>
                    </thead>
                    <tbody>
                    <React.Suspense fallback={<div>Loading...</div>}>
                    {searchResult.map(game => (
                        <tr key={game.id}>
                            <td>{game.id}</td>
                            <td>{game.name}</td>
                            <td>{game.id_type?.type}</td>
                            <td>{game.id_plat?.platform}</td>
                            <td>{game.editeur}</td>
                            <td>{game.date?.split('T')[0]}</td>
                            <td>{game.prix}€</td>
                            <td>{game.reduction}%</td>
                            <td>{game.stock}</td>
                            <td><img loading="eager" id={"image"} src={game.images} alt="image du jeux"/></td>
                            <td>
                                <button>Modifier</button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(game.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                    </React.Suspense>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Backoffice;
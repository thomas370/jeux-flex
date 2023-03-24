import React, { useEffect, useState } from "react";
import '../../styles/Backoffice.css'
import Nav from "./Nav";

const Backoffice = () => {
  const [games, setGames] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const fetchGames = async () => {
    const response = await fetch('http://localhost:8000/api/jeuxes');
    const data = await response.json();
    setGames(data['hydra:member']);
  }

  useEffect(() => {
    fetchGames()
  }, []);

  useEffect(() => {
    setSearchResult(games)
  }, [games]);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/api/jeuxes/${id}`, {
      method: 'DELETE'
    });

    setGames(games.filter(game => game.id !== id));
  }

  return (
    <div>
      <Nav />
      <div className="dalle">
        <h1>Backoffice</h1>
        <div className="flex">
            <div className="search">
              <input type="text" placeholder="Rechercher un jeu" onChange={(e) => {
                setSearchResult(games.filter(game => game.name.toLowerCase().includes(e.target.value.toLowerCase())))
              }} />
            </div>
            <div className="add">
              <a href="/add">Ajouter un jeu</a>
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
            {/* faire une boucle pour afficher tout les articles */}
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
                <td><img loading="eager" id={"image" } src={game.images} alt="image du jeux" /></td>
                <td>
                  <button>Modifier</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(game.id)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Backoffice;
import React, { useEffect, useState } from "react";
import '../../styles/Backoffice.css'
import Nav from "./Nav";

const Backoffice = () => {
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
      <div className="dalle">
        <h1>Backoffice</h1>
        <table>
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
          <tbody>
            {/* faire une boucle pour afficher tout les articles */}
            {searchResult.map(game => (
              <tr>
                <td>{game.id}</td>
                <td>{game.name}</td>
                <td>{game.id_type?.type}</td>
                <td>{game.id_plat?.platform}</td>
                <td>{game.editeur}</td>
                <td>{game.date}</td>
                <td>{game.prix}€</td>
                <td>{game.reduction}%</td>
                <td>{game.stock}</td>
                <td><img loading="eager" id={"image" } src={game.images} alt="" /></td>
                <td>
                  <button>Modifier</button>
                </td>
                <td>
                  <button>Supprimer</button>
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
import React, {useState} from 'react';
import '../../styles/Wishlist.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Wishlist = () => {
    const [fav] = useState(JSON.parse(localStorage.getItem('fav')) || []);

    const handleDelete = (id) => {
        const newFav = fav.filter((item) => item.id !== id);
        localStorage.setItem('fav', JSON.stringify(newFav));
        window.location.reload();
    }

    return (
        <div>
            <Link to="/">
                <button className="back-button">
                    <p><FontAwesomeIcon icon={faArrowLeft} /> Retour a l'accueil</p>
                </button>
            </Link>
            <div className="wishList">
                <h1>Wishlist</h1>
                <div className="wishList-container">
                    <div className="wishList-item">
                        {fav.map((item) => (
                            <div className="wishList_item" key={item.id}>
                                <div className="wishList_item_img">
                                   <img src={item.images} alt={item.name} />
                                </div>
                                <div className="wishList_item_content">
                                    <h3>{item.name}</h3>
                                    <p>{item.prix} €</p>
                                    <button onClick={() => handleDelete(item.id)}>suprimer</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
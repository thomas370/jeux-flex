import React, {useState} from 'react';
import '../../styles/Wishlist.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Wishlist = () => {
    const [fav] = useState(JSON.parse(localStorage.getItem('fav')) || []);
    return (
        <div>
            <Link to="/">
                <button className="back-button">
                    <FontAwesomeIcon icon={faArrowLeft} />
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
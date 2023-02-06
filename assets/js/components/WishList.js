import React from 'react';
import '../../styles/Wishlist.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Wishlist = () => {

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

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
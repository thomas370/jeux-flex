import React, {useEffect, useState} from "react"
import '../../styles/Nav.css';
import { Link } from "react-router-dom";
import { logout, getRoles } from '../../../src/service/auth.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartShopping,
    faBars,
    faXmark,
    faStar,
    faUser,
    faArrowRightFromBracket,
    faScrewdriverWrench
} from '@fortawesome/free-solid-svg-icons';
import jwtDecode from 'jwt-decode';

const Nav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false) // state pour le menu burger
    const panier = JSON.parse(localStorage.getItem('cart'))  // on récupère le panier dans le localstorage
    const [Roles, setRoles] = useState(null) // state pour les rôles de l'utilisateur

    const handleToggle = () => { // fonction pour ouvrir le menu burger
        setNavbarOpen(!navbarOpen)
    }

    useEffect(() => { // on récupère les rôles de l'utilisateur
        setRoles(getRoles());
        console.log(getRoles());
    }, []);

    return (
        <nav className="navbar">
            <span className="navbar-toggle" id="js-navbar-toggle" onClick={handleToggle}>
                <FontAwesomeIcon icon={navbarOpen ? faXmark : faBars} />
            </span>
            <Link to="/" className="logo">Jeux-Flex</Link>
            <ul className="main-nav" id="js-menu">
                <li><Link className="nav-links" to="/WishList"><FontAwesomeIcon icon={faStar} /></Link></li>
                <li><Link className="nav-links" to="/panier"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
                {localStorage.getItem('cart') ? <div className="pastille">{panier.reduce((acc, item) => acc + item.quantity, 0)}</div> : null}
                {Roles && Roles.includes('ROLE_ADMIN') ? <li><Link className="nav-links" to="/Backoffice"><FontAwesomeIcon icon={faScrewdriverWrench} /></Link></li> : null}
                {localStorage.getItem('token') ? <li onClick={logout}><FontAwesomeIcon icon={faArrowRightFromBracket} /></li> : <li><Link to="/loginUser"><FontAwesomeIcon icon={faUser} /></Link></li>}
            </ul>
        </nav>
    );
};

export default Nav;
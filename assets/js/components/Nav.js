import React, { useState } from "react"
import '../../styles/Nav.css';
import { Link } from "react-router-dom";
import { logout } from '../../../src/service/auth.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars, faXmark, faStar, faUser,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const panier = JSON.parse(localStorage.getItem('cart'))

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <nav className="navbar">
      <span className="navbar-toggle" id="js-navbar-toggle" onClick={handleToggle}>
        <FontAwesomeIcon icon={navbarOpen ? faXmark : faBars} />
      </span>
            <Link to="/" className="logo">Jeux-Flex</Link>
            <ul className="main-nav" id="js-menu">
                {localStorage.getItem('token') ? <li><Link className="nav-links" to="/WishList"><FontAwesomeIcon icon={faStar} /></Link></li> : null}
                <li><Link className="nav-links" to="/panier"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
                {localStorage.getItem('cart') ? <div className="pastille">{panier.reduce((acc, item) => acc + item.quantity, 0)}</div> : null}
                {localStorage.getItem('token') ? <li onClick={logout}><FontAwesomeIcon icon={faArrowRightFromBracket} /></li> : <li><Link to="/loginUser"><FontAwesomeIcon icon={faUser} /></Link></li>}
            </ul>
        </nav>
    );
};

export default Nav;
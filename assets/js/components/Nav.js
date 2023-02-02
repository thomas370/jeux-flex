import React, { useState } from "react"
import '../../styles/Nav.css';
import { Link } from "react-router-dom";
import { logout } from '../../../src/service/auth.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faBars, faStar, faXmark } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <nav className="navbar">
      <span className="navbar-toggle" id="js-navbar-toggle" onClick={handleToggle}>{navbarOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
      </span>
      <Link to="/" className="logo">Jeux-Flex</Link>
      <ul className="main-nav" id="js-menu">
        {(localStorage.getItem('token')) ? <li><Link className="nav-links" to="/WishList"><FontAwesomeIcon icon={faStar} /></Link></li> : null}
        <li><Link className="nav-links" to="/panier"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
        {(localStorage.getItem('token')) ? <li onClick={logout()}>Logout</li> : <li><Link to="/loginUser"><FontAwesomeIcon icon={faUser} /></Link></li>}
      </ul>
    </nav>
  );
};

export default Nav;



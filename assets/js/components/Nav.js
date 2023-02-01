import React from 'react';
import '../../styles/Nav.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logout } from '../../../src/services/auth'
import { faCartShopping, faUser, faBars, faStar } from '@fortawesome/free-solid-svg-icons';

const handleClick = () => {
  const menu = document.querySelector("#js-menu");
  menu.classList.toggle("show");
}

const Nav = () => {
  return (
    <nav className="navbar">
      <span className="navbar-toggle" id="js-navbar-toggle" onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} />
      </span>
      <Link to="/" className="logo">Jeux-Flex</Link>
      <ul className="main-nav" id="js-menu">
        {(localStorage.getItem('token')) ? <li><Link className="nav-links" to="/WishList"><FontAwesomeIcon icon={faStar} /></Link></li> : null}
        <li><Link className="nav-links" to="/panier"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
        {(localStorage.getItem('token')) ? <li onClick={logout}>Logout</li> : <li><Link to="/loginUser"><FontAwesomeIcon icon={faUser} /></Link></li>}
      </ul>
    </nav>
  );
};

export default Nav;



import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faUser, faBars} from '@fortawesome/free-solid-svg-icons';


const Nav = () => {
    return (
        <nav className="navbar">
            <span className="navbar-toggle" id="js-navbar-toggle">
            <FontAwesomeIcon icon={faBars} />
            </span>
            <a href={"/"} className="logo" >Jeux-Flex</a>
            <ul className="main-nav" id="js-menu">
                <li><Link className="nav-links" to="/panier"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
                <li><Link  to="/loginUser"><FontAwesomeIcon icon={faUser} /></Link></li>
            </ul>
        </nav>
    );
};

export default Nav;


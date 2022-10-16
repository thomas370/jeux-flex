import React from 'react';
import {Link} from "react-router-dom";


const Nav = () => {
    return (
        <nav className="navbar">
            <span className="navbar-toggle" id="js-navbar-toggle">
            <i className="fas fa-bars"></i>
            </span>
            <a href={"/"} className="logo" >Jeux-Flex</a>
            <ul className="main-nav" id="js-menu">
                <li><Link className="nav-links" to="/panier"><i className="fa-sharp fa-solid fa-cart-shopping"></i></Link></li>
            </ul>
        </nav>
    );
};

export default Nav;


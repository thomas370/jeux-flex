import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import './styles/app.css';
import Home from './js/components/Home';
import Panier from './js/components/Panier';
import Fiches from './js/components/Fiches';
import LoginUser from "./js/components/LoginUser";
import Register from "./js/components/Register";
import BackOffice from "./js/components/Backoffice";
import WishList from "./js/components/WishList";
import AddGame from "./js/components/AddGame";

function isAdmin() { // fonction pour vérifier si l'utilisateur est admin
    const token = window.localStorage.getItem('token');
    console.log('Token:', token);
    if (!token) { // si pas de token, on retourne false
        return false;
    }
    const decodedToken = jwtDecode(token); // on décode le token
    console.log('Decoded token:', decodedToken);
    return decodedToken.roles && decodedToken.roles.includes('ROLE_ADMIN'); // on retourne true si le rôle est admin
}

function PrivateRoute({ children }) { // fonction pour les routes privées
    return (
        isAdmin() ? children : <Navigate to="/LoginUser" /> // si l'utilisateur est admin, on affiche la page, sinon on redirige vers la page de connexion
    );
}
// les routes
ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Panier" element={<Panier />} />
            <Route path="Fiches/:id" element={<Fiches />} />
            <Route path="LoginUser" element={<LoginUser />} />
            <Route path="Register" element={<Register />} />
            <Route path="Backoffice" element={<PrivateRoute><BackOffice /></PrivateRoute>} />
            <Route path="WishList" element={<WishList />} />
            <Route path="AddGame" element={<PrivateRoute><AddGame /></PrivateRoute>} />
        </Routes>
    </Router>,
    document.getElementById("root")
);
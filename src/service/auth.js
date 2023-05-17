import axios from "axios";
import jwtDecode from "jwt-decode";

export const setAxiosToken = (token) => { // Fonction qui permet d'envoyer le token dans le header de chaque requête
    axios.defaults.headers["Authorization"] = `Bearer ${token}`;
};

export const logout = () => { // Fonction qui permet de se déconnecter
    console.log("logout")
    window.localStorage.removeItem("token");
    delete axios.defaults.headers["Authorization"];
    window.location.href = '/';
};

export const setup = () => { // Fonction qui permet de vérifier si l'utilisateur est connecté
    let token = window.localStorage.getItem("token");
    if (token) {
        const { exp: expiration, Roles: Roles } = jwtDecode(token);
        console.log('Expiration:', expiration);
        console.log('Roles:', Roles);
        if (expiration * 1000 > new Date().getTime()) {
            setAxiosToken(token);
            return Roles;
        } else {
            logout();
            return false;
        }
    }
};


export const isAuthenticated = () => { // Fonction qui permet de vérifier si l'utilisateur est connecté
    const token = window.localStorage.getItem("token");
    if (token) {
        const { exp: expiration } = jwtDecode(token);
        if (expiration * 1000 > new Date().getTime()) {
            return true;
        }
    }
    console.log("isAuthenticated")
    return false;
};

export const getRoles = () => { // Fonction qui permet de récupérer les rôles de l'utilisateur
    const token = window.localStorage.getItem("token");
    if (token) {
        const { exp: expiration, roles: Roles } = jwtDecode(token);
        console.log('Expiration:', expiration);
        console.log('Roles:', Roles);
        if (expiration * 1000 > new Date().getTime()) {
            return Roles;
        }
    }
};

export default {
    logout, setup, getRoles, setAxiosToken, isAuthenticated
};
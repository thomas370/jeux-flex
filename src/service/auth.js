import axios from "axios";
import jwtDecode from "jwt-decode";

export const setAxiosToken = (token) => {
    axios.defaults.headers["Authorization"] = `Bearer ${token}`;
};

export const logout = () => {
    console.log("logout")
    window.localStorage.removeItem("token");
    delete axios.defaults.headers["Authorization"];
    window.location.reload();
};

export const setup = () => {//
    let token = window.localStorage.getItem("token");
    if (token) {
        const { exp: expiration, roles: roles } = jwtDecode(token);
        if (expiration * 1000 > new Date().getTime()) {
            setAxiosToken(token);
            return roles;
        } else {
            logout();
            return false;
        }
    }
};

//faire une fonction qui valide si le user est authentifié 
export const isAuthenticated = () => {
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

export const getRoles = () => { 
    const token = window.localStorage.getItem("token");
    if (token) {
        const { exp: expiration, roles: roles } = jwtDecode(token);
        if (expiration * 1000 > new Date().getTime()) {
            return roles;
        }
    }
};

export default {
    logout, setup, getRoles, setAxiosToken, isAuthenticated
};
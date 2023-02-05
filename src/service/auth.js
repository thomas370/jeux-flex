import axios from "axios";
import jwtDecode from "jwt-decode";

export const setAxiosToken = (token) => {
    axios.defaults.headers["Authorization"] = `Bearer ${token}`;
};

export const logout = () => {
    window.localStorage.removeItem("token");
    delete axios.defaults.headers["Authorization"];
};

export const setup = () => {
    const token = window.localStorage.getItem("token");
    if (token) {
        const { exp: expiration, roles: roles } = jwtDecode(token);
        if (expiration * 1000 > new Date().getTime()) {
            setAxiosToken(token);
            return true && roles;
        } else {
            logout();
            return false;
        }
    }
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
    logout, setup, getRoles, setAxiosToken
};
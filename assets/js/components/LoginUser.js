import React, { useState } from 'react';
import '../../styles/login.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEye} from "@fortawesome/free-solid-svg-icons";
import { setup, getRoles } from '../../../src/service/auth';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const loginUser = () => {
    const [email, setEmail] = useState("") // state pour l'email
    const [password, setPassword] = useState("") // state pour le mot de passe

    const handleSubmit = async (e) => { // fonction pour la connexion
        e.preventDefault()
        console.log(email, password);
        const credential = { // requête à l'api pour la connexion
            email,
            password
        }
        try { // try catch pour la connexion avec un message d'erreur si l'email ou le mot de passe est incorrect avec axios
            const response = await axios.post('http://localhost:8000/api/login', credential).then(response => response.data.token).then(token => {
                window.localStorage.setItem('token', token); // on stock le token dans le localstorage
                setup(); // on récupère le token et on le décode pour récupérer les données de l'utilisateur
                getRoles(); // on récupère les rôles de l'utilisateur
                return jwtDecode(token); // on décode le token
            });
            window.location.href = "/"; // on redirige l'utilisateur vers la page d'accueil
            console.log(response);
        } catch (error) { // on affiche un message d'erreur si l'email ou le mot de passe est incorrect
            console.log(error.response.data);
            if(error.response.data.code === 401) {
                alert("Email ou mot de passe incorrect");
            }
        }
    }


    return (
        <div>
            <Link to="/">
                <button className="back-button">
                    <p><FontAwesomeIcon icon={faArrowLeft} /> Retour à l'accueil</p>
                </button>
            </Link>
            <div className="login">
                <h1>Connexion</h1>
                <form onSubmit={handleSubmit}> {/* formulaire pour la connexion */}
                    <label>
                        <input type="text" placeholder='Email' onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label>
                        <div className='eye'>
                            <input type="password" placeholder='Mot de passe' id="password" onChange={e => setPassword(e.target.value)} />
                            <div className='eyes'>
                                <FontAwesomeIcon icon={faEye} onMouseOver={e => document.getElementById("password").type = "text"} onMouseOut={e => { document.getElementById("password").type = "password"; e.target.classList.remove("fa-eye-slash"); }} />
                            </div>
                        </div>
                    </label>
                    <div>
                        <button type="submit">Envoyer</button>
                        {window.localStorage.getItem('token') ? <p>Vous êtes connecté</p> : null} {/* si l'utilisateur est connecté on affiche un message */}
                    </div>
                </form>
                <p>pas encore inscrit ? <Link to="/Register">Inscription</Link></p>
            </div>
        </div>
    );
};

export default loginUser;
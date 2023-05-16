import React, { useState } from 'react';
import '../../styles/login.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEye} from "@fortawesome/free-solid-svg-icons";
import { setup, getRoles } from '../../../src/service/auth';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const loginUser = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password);
        const credential = {
            email,
            password
        }
        try {
            const response = await axios.post('http://localhost:8000/api/login', credential).then(response => response.data.token).then(token => {
                window.localStorage.setItem('token', token);
                setup();
                getRoles();
                return jwtDecode(token);
            });
            window.location.href = "/";
            console.log(response);
        } catch (error) {
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
                <form onSubmit={handleSubmit}>
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
                        {window.localStorage.getItem('token') ? <p>Vous êtes connecté</p> : null}
                    </div>
                </form>
                <p>pas encore inscrit ? <Link to="/Register">Inscription</Link></p>
            </div>
        </div>
    );
};

export default loginUser;
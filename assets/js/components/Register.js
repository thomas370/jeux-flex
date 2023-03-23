import React, {useState, useEffect } from 'react';
import '../../styles/Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import {Link} from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [passwordStrength, setPasswordStrength] = useState(0); // Ajout d'un state pour stocker la force du mot de passe

    useEffect(() => {
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$&*]/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.{8,})/;
    let strength = 0;

    // Vérifier si le mot de passe contient une majuscule
    if (uppercaseRegex.test(password)) {
        strength += 1;
    }

    // Vérifier si le mot de passe contient au moins 8 caractères
    if (password.length >= 8) {
        strength += 1;
    }

    // Vérifier si le mot de passe contient un caractère spécial
    if (specialCharRegex.test(password)) {
        strength += 1;
    }

    // Mettre à jour la force du mot de passe
    setPasswordStrength(strength * 33.3);
    }, [password]); // Mettre à jour la force du mot de passe à chaque fois que le mot de passe est modifié

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            alert("Les deux mots de passe ne correspondent pas.");
            return;
        }
        if (passwordStrength !== 100) {
            alert("Le mot de passe doit contenir au moins 8 caractères, une majuscule et un caractère spécial.");
            return;
        }
        const credential = {
            email,
            password
        }
        try {
            const response = await axios.post('http://localhost:8000/api/users', credential);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div>
            <Link to="/">
                <button className="back-button">
                    <p><FontAwesomeIcon icon={faArrowLeft} /> Retour à l'accueil</p>
                </button>
            </Link>
            <div className="Register">
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder='Email' onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    <input type="password" placeholder='Mot de passe' onChange={e => setPassword(e.target.value)}/>
                    <div className="progress-bar">
                        {/[A-Z]/.test(password) && <progress value="100" max="100" />}
                        {password.length >= 8 && <progress value="100" max="100" />}
                        {/[!@#$&*]/.test(password) && <progress value="100" max="100" />}
                    </div>
                    <p>Le mot de passe doit contenir au moins 8 caractères, une majuscule et un caractère spécial.</p>
                </label>
                <label>
                    <input type="password" placeholder='Vérification de mot de passe' onChange={e => setPasswordConfirm(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Envoyer</button>
                </div>
            </form>
            <p>Se connecter ? <Link  to="/LoginUser">Connexion</Link></p>
        </div>
        </div>
    );
};

export default Register;
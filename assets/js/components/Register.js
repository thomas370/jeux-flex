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
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Récupérer la liste des utilisateurs existants
        const fetchUsers = async () => {
          try {
            const response = await axios.get("http://localhost:8000/api/users");
            setUsers(response.data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchUsers();
      }, []);
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            alert("Les deux mots de passe ne correspondent pas.");
            return;
        }
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.{8,})/;
        if (!passwordRegex.test(password)) {
            alert("Le mot de passe doit contenir au moins 8 caractères, une majuscule et un caractère spécial.");
            return;
        }
        const existingUser = users.find((user) => user.email === email);
        if (existingUser) {
          alert("L'adresse e-mail existe déjà.");
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
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
            </Link>
            <div className="Register">
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder='pseudo' onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)}/>
                </label>
                <label>
                    <input type="password" placeholder='Password-verification' onChange={e => setPasswordConfirm(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <p>Ce connecter ? <Link  to="/LoginUser">Connexion</Link></p>
        </div>
        </div>
    );
};

export default Register;
import React, { useState, useEffect } from 'react';
import '../../styles/Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEye, faEyeSlash, } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { Link } from "react-router-dom";
import { getRoles } from '../../../src/service/auth';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [emailError, setEmailError] = useState("");


  useEffect(() => {
    setPasswordStrength(calculatePasswordStrength(password));
  }, [password]);


  const calculatePasswordStrength = (password) => {
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$&*]/;
    const passwordRegex = /[0-9]/;
    let strength = 0;

    if (uppercaseRegex.test(password)) {
      strength += 1;
    }

    if (passwordRegex.test(password)) {
      strength += 1;
    }

    if (specialCharRegex.test(password)) {
      strength += 1;
    }

    return strength;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert("Les deux mots de passe ne correspondent pas.");
      return;
    }
    if (passwordStrength < 3) {
      alert("Le mot de passe n'est pas assez fort.");
      return;
    }
    const credential = {
      email,
      password,
    };
    try {
      const response = await axios.post(
          "http://localhost:8000/api/users",
          credential
      );
      console.log(response);
      window.location.href = '/'; // Redirection vers la page d'accueil après inscription réussie
    } catch (error) {
      console.log(error.response.data);
      setEmailError(error.response.data.violations.map((violation) => violation.message));
      setErrorMessage(error.response.data.message); // Mise à jour du message d'erreur
    }
  };

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
            <input type="text" placeholder='Email' onChange={e => setEmail(e.target.value)} />
          </label>
          <p>{emailError}</p>
          <label>
            <div className='eye'>
              <input type="password" placeholder='Mot de passe' id="password" onChange={e => setPassword(e.target.value)} />
              <div className='eyes'>
                <FontAwesomeIcon icon={faEye} onMouseOver={e => document.getElementById("password").type = "text"} onMouseOut={e => { document.getElementById("password").type = "password"; e.target.classList.remove("fa-eye-slash"); }} />
              </div>
            </div>
            <div className="progress-bar">
              {/[A-Z]/.test(password) && <progress value="100" max="100" />}
              {/[0-9]/.test(password) && <progress value="100" max="100" />}
              {/[!@#$&*]/.test(password) && <progress value="100" max="100" />}
            </div>
            <p>Le mot de passe doit contenir au moins 8 caractères, une majuscule et un caractère spécial.</p>
          </label>
          <label>
            <input type="password" placeholder='Vérification de mot de passe' onChange={e => setPasswordConfirm(e.target.value)} />
          </label>
          <div>
            <button type="submit">Envoyer</button>
          </div>
          <div>

          </div>
        </form>
        <p>Se connecter ? <Link to="/LoginUser">Connexion</Link></p>
      </div>
    </div>
  );
};

export default Register;
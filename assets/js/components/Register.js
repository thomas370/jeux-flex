import React, {useState} from 'react';
import '../../styles/Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import {Link} from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
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
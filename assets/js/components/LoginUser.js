import React, { useState } from 'react';
import '../../styles/login.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { setAxiosToken } from '../../../src/service/auth'
import jwtDecode from 'jwt-decode';
import axios from 'axios';

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
                setAxiosToken(token)
                return jwtDecode(token)
            });

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
            <div className="login">
                <h1>Connexion</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type="text" placeholder='pseudo' onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label>
                        <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
                    </label>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <p>pas encore inscrit ? <Link to="/Register">Inscription</Link></p>
            </div>
        </div>
    );
};

export default loginUser;
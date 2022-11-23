import React, {useState} from 'react';
import '../../styles/login.css';

const loginUser = () => {
    const [pseudo, setPseudo] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(pseudo, password);
        // creer un objet avec userName et password
        const credential = {
            pseudo,
            password
        }
        // faire un fetch post vers /api/login_check avec l'objet data en parametre
        const response = await fetch('http://localhost:8000/api/login_check', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credential)
        });
        const data = await response.json();
        console.log(data)


        // recuperer le token qui arrive en réponse
    }

    return (
        <div className="login">
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder='pseudo' onChange={e => setPseudo(e.target.value)}/>
                </label>
                <label>
                    <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default loginUser;

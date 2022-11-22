import React from 'react';
import '../../styles/login.css';

const loginUser = () => {
    return (
        <div className="login">
            <h1>Log In</h1>
            <form>
                <label>
                    <input type="text"placeholder='pseudo' onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <input type="password"  placeholder='Password'  onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default loginUser;

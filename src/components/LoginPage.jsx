import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( username == 'dwain' && password == '01234'){
            window.location.href = '/Authorities';
        }
        setPassword('');
        setUsername('');
    };

    return (
        <>
        <div className="container">
            <div className='Title'>
                <div className="transbox">
                     <h1>Crime Reporting System</h1>
                </div>
            </div>
            <div className="login-container">
                <h2>Authority Login</h2>
                <div className='UPL'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className='Lbtn'>Login</button>
                    </form>
                    <div className="anchor-group">
                        <Link id="signup-button" to='/signup'>Sign Up</Link>
                        <Link id="forgot-password-button" to='/forgotpassword'>Forgot Password?</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default LoginPage;

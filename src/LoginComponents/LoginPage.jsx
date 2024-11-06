import React,{ useState, useEffect } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import { supabase } from '../createClient';
function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);


    async function CheckCredentials() {
        try {
            const { data, error } = await supabase
                .from('LoginCredentials')
                .select('*')
                .eq('name', username)

            if (error) {
                alert('Error fetching user data: ' + error.message);
                return;
            }

            if (data.length === 0) {
                alert('Username not found');
                return;
            }

            const user = data[0];

            if (user.password === password) {
                window.location.href = '/Authorities';
            }
        } 
        catch (error) {
            console.error('Error checking credentials:', error);
            alert('An unexpected error occurred');
        }
        setPassword('');
        setUsername('');
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        CheckCredentials();
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
                                onChange={handleUsernameChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <button type="submit" className='LBtn'>Login</button>
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
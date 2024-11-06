import { useState } from 'react';
import { supabase } from '../createClient'; // Import your Supabase client

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    // Function to add new credentials to Supabase
    async function handleSignup() {
        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            // Insert the new user into the LoginCredentials table
            const { data, error } = await supabase
                .from('LoginCredentials')
                .insert([
                    { id: 4 , name: username, password: password } // Adjust 'name' and 'password' if your column names differ
                ]);

            if (error) {
                alert('Error creating account: ' + error.message);
                return;
            }

            alert('Signup successful');
            window.location.href = '/'; // Redirect to login page after signup
        } catch (error) {
            console.error('Unexpected error:', error);
            alert('An unexpected error occurred');
        }
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        handleSignup(); // Call the signup function
    };

    return (
      <>
        <div className="Case_Details">
          <form onSubmit={handleSubmit}>
              <h2>Sign Up</h2>
              <label htmlFor="username">Username:</label>
              <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
              />
              <br />
              <label htmlFor="password">Password:</label>
              <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
              />
              <br />
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
              />
              <br />
              <button type="submit" className='LBtn'>Sign Up</button>
          </form>
        </div>
      </>
    );
}

export default SignUp;


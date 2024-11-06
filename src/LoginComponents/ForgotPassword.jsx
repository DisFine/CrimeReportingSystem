import { useState } from 'react';
import { supabase } from '../createClient';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);

    // Send password reset email
    async function handleForgotPassword() {
        try {
            const { data, error } = await supabase.auth.api.resetPasswordForEmail(email);

            if (error) {
                setMessage(`Error: ${error.message}`);
                return;
            }

            setMessage('Password reset link sent! Check your email.');
        } catch (error) {
            console.error('Unexpected error:', error);
            setMessage('An unexpected error occurred. Please try again later.');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleForgotPassword();
    };

    return (
      <>
        <div className="Case_Details">
          <form onSubmit={handleSubmit}>
              <h2>Forgot Password</h2>
              <label htmlFor="email">Email:</label>
              <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
              />
              <br />
              <button type="submit" className='LBtn'>Send Reset Link</button>
              <p>{message}</p>
          </form>
        </div>
      </>
    );
}

export default ForgotPassword;


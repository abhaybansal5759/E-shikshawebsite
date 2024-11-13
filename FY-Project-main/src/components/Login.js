import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() !== '' && password.trim() !== '') {
      if (!/\S+@\S+\.\S+/.test(email)) {
        toast.error('Invalid email');
      } else {
        setIsSubmitting(true);

        try {
          const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });

          if (response.ok) {
            const data = await response.json();
            setIsSubmitting(false);
            toast.success('Login successful!');
            localStorage.setItem('isLoggedIn', true);
              localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/');
          } else {
            setIsSubmitting(false);
            toast.error('Login failed. Please check your credentials and try again.');
          }
        } catch (error) {
          setIsSubmitting(false);
          toast.error('An error occurred. Please try again later.');
        }
      }
    } else {
      toast.error('Please enter email and password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <p>
        Not logged in? <Link to="/signin">Sign up here</Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Login;

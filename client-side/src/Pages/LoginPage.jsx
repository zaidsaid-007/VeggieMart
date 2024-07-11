import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';
import AuthContext from '../Utils/AuthContext';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with real authentication logic
    if (formData.email === 'test@test.com' && formData.password === 'password') {
      login();
      navigate('/');
    } else {
      setErrorMessage('Invalid credentials');
    }
  };

  return (
    <div className="auth-container">
      <Typography variant="h4" component="h2" gutterBottom>
        Login
      </Typography>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="auth-form">
        <TextField
          type="email"
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;

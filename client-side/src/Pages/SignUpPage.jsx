import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    contact: '',
    address: '',
    userType: 'buyer',
    password: '',
    confirmPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here (e.g., form validation, API call)
    if (formData.password === formData.confirmPassword) {
      // Save user data (e.g., localStorage or API call)
      navigate('/login');
    } else {
      setErrorMessage('Passwords do not match');
    }
  };

  return (
    <div className="auth-container">
      <Typography variant="h4" component="h2" gutterBottom>
        Sign Up
      </Typography>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="auth-form">
        <TextField
          type="text"
          name="username"
          label="Username"
          value={formData.username}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
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
          type="text"
          name="contact"
          label="Contact"
          value={formData.contact}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          name="address"
          label="Address"
          value={formData.address}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">User Type</FormLabel>
          <RadioGroup
            name="userType"
            value={formData.userType}
            onChange={handleChange}
          >
            <FormControlLabel value="buyer" control={<Radio />} label="Buyer" />
            <FormControlLabel value="seller" control={<Radio />} label="Seller" />
          </RadioGroup>
        </FormControl>
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
        <TextField
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpPage;

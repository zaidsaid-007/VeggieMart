import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    contact: '',
    address: '',
    userType: 'buyer', // Default to buyer
    password: '',
  });

  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form 
    console.log('Signup:', formData);
    
    // success message
    setSuccessMessage('Your account has been created successfully!');

    // Clear form fields
    setFormData({
      username: '',
      email: '',
      contact: '',
      address: '',
      userType: 'buyer',
      password: '',
    });

    // Hide success message and redirect after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
      navigate('/'); // Redirect to homepage
    }, 3000);
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <div className="user-type">
          <label>
            <input
              type="radio"
              name="userType"
              value="buyer"
              checked={formData.userType === 'buyer'}
              onChange={handleChange}
            />
            Buyer
          </label>
          <label>
            <input
              type="radio"
              name="userType"
              value="seller"
              checked={formData.userType === 'seller'}
              onChange={handleChange}
            />
            Seller
          </label>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;

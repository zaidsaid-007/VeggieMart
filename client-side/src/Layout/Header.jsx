import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">
          Veggie Mart
        </Typography>
        <div>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/product">Product</Button>
          <Button color="inherit" component={Link} to="/categories">Categories</Button>
          <Button color="inherit" component={Link} to="/stores">Stores</Button>
          <Button color="inherit" component={Link} to="/fresh">Fresh</Button>
          <Button color="inherit" component={Link} to="/settings">Settings</Button>
        </div>
        <div>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
// improved some changes visible on homeoage.
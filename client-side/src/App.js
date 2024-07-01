import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import Products from './Pages/ProductsPage';
import Users from './Pages/Users';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import LoginPage from'./Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import './App.css';

function App() {
  return (
      <Router>
        <div className='App'>
         <Header />
        <Routes>
          <Route path='/' exact component={<Home />} />
          <Route path='/products' components={<Products />} />
          <Route path='/users' components={<Users/>} />
          <Route path='/auth' component={<LoginPage />} />
          <Route path='/signup' component={<SignUpPage />} />
        <Footer />  
        </Routes>
        </div>
      </Router>
  );
}

export default App;

import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import AuthContext from '../Utils/AuthContext';

const HomePage = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <div className="home-page">
      <header>
        <h1>Home Page</h1>
        {isAuthenticated ? (
          <Button variant="contained" color="secondary" onClick={logout}>
            Logout
          </Button>
        ) : (
          <div>
            {/* <Link to="/login">Login</Link> */}
            {/* <Link to="/signup">Sign Up</Link> */}
          </div>
        )}
      </header>
      <h2>Products</h2>
      <ul className="product-list">
        <li className="product-item">Product 1</li>
        <li className="product-item">Product 2</li>
        <li className="product-item">Product 3</li>
      </ul>
    </div>
  );
};

export default HomePage;

// // changes that am supposed to make fior the codeto work.
// import React from 'react';
// import { Typography, TextField, Button, Grid, Card, CardContent } from '@mui/material';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';
// import MainContent from '../components/MainContent';

// const HomePage = () => {
//   return (
//     <div>
//       <Header />
//       <Sidebar />
//       <MainContent>
//         <header style={{ padding: '20px 0', textAlign: 'center' }}>
//           <Typography variant="h4">Explore fresh produce</Typography>
//           <TextField label="Search for veggies and fruits" variant="outlined" fullWidth margin="normal" />
//         </header>
//         <section>
//           <Typography variant="h6">Popular Items</Typography>
//           <div style={{ display: 'flex', gap: '10px', overflowX: 'auto' }}>
//             <Button variant="outlined">Organic Produce</Button>
//             <Button variant="outlined">Seasonal Fruits</Button>
//             <Button variant="outlined">Leafy Greens</Button>
//             <Button variant="outlined">Root Vegetables</Button>
//             <Button variant="outlined">Citrus Fruits</Button>
//             <Button variant="outlined">Berries</Button>
//             <Button variant="outlined">Exotic Fruits</Button>
//           </div>
//         </section>
//         <section>
//           <Typography variant="h6">Categories</Typography>
//           <Grid container spacing={2}>
//             <Grid item>
//               <Button variant="outlined">Orga</Button>
//             </Grid>
//             <Grid item>
//               <Button variant="outlined">Se</Button>
//             </Grid>
//             <Grid item>
//               <Button variant="outlined">Roots & K</Button>
//             </Grid>
//             <Grid item>
//               <Button variant="outlined">Citrus</Button>
//             </Grid>
//             <Grid item>
//               <Button variant="outlined">Berries</Button>
//             </Grid>
//           </Grid>
//         </section>
//         <section>
//           <Typography variant="h6">Customer Ratings</Typography>
//           <div>
//             {/* Implement your rating component or use icons */}
//           </div>
//         </section>
//         <section>
//           <Typography variant="h6">Suggested for You</Typography>
//           <Grid container spacing={2}>
//             <Grid item>
//               <Card>
//                 <CardContent>
//                   <img src="your-image-url" alt="Fresh Picks" />
//                   <Typography>Fresh Picks</Typography>
//                   <Typography>Organic Market</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//             <Grid item>
//               <Card>
//                 <CardContent>
//                   <img src="your-image-url" alt="Farm Fresh Selection" />
//                   <Typography>Farm Fresh Selection</Typography>
//                   <Typography>Garden Fresh Picks</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//             <Grid item>
//               <Card>
//                 <CardContent>
//                   <img src="your-image-url" alt="Veggie Basics" />
//                   <Typography>Veggie Basics</Typography>
//                   <Typography>Green Thumb Tips</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//             <Grid item>
//               <Card>
//                 <CardContent>
//                   <img src="your-image-url" alt="Veggie Delights" />
//                   <Typography>Veggie Delights</Typography>
//                   <Typography>Fruit Medley</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </section>
//       </MainContent>
//     </div>
//   );
// };

// export default HomePage;


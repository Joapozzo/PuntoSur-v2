// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (quantity) => {
    setCartCount(cartCount + quantity);
  };

  return (
    <Router>
      <Routes handleAddToCart={handleAddToCart} />
    </Router>
  );
};

export default App;

// routes.jsx
import React from 'react';
import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Layout from '../components/Layout/Layout';
import Products from '../pages/Products/Products';
import Checkout from '../pages/Checkout/Checkout';
import Pago from '../pages/Pago/Pago';
import Login from '../pages/Login/Login';
import LayoutPublic from '../components/Layout/LayoutPublic';
import Ajustes from '../pages/Ajustes/Ajustes';
const Routes = ({ handleAddToCart }) => {
  return (
    <ReactDomRoutes>
      <Route path='/' element={<Layout> <Home onAddToCart={handleAddToCart}/> </Layout>} />
      <Route path='/productos' element={<Layout> <Products/> </Layout>} />
      <Route path='/checkout' element={<Layout> <Checkout/> </Layout>} />
      <Route path='/pago' element={<Layout> <Pago/> </Layout>} />
      <Route path='/login' element={<LayoutPublic> <Login/> </LayoutPublic>} />
      <Route path='/ajustes' element={<LayoutPublic> <Ajustes/> </LayoutPublic>} />
    </ReactDomRoutes>
  );
}

export default Routes;

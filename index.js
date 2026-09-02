import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter ,Routes ,Route } from 'react-router-dom';

import './index.css';

 
import Homepage from './landing_page/home/Homepage';

import Signup from './landing_page/signup/signup';

import AboutPage from './landing_page/About/AboutPage';
import ProductsPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';

import notFound from './landing_page/notFound';
import Navbar from './landing_page/Navbar';

import Footer from './landing_page/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
<Routes>
  
  <Route path="/" element={<Homepage/>} />                    
   <Route path="/signup" element={<Signup/>} />
  <Route path="/About" element={< AboutPage/>} />
  <Route path="/products" element={< ProductsPage/>} />
    <Route path="/pricing" element={<PricingPage/>}/>
  <Route path="/support" element={<SupportPage/>} />
  <Route path="*" element={<notFound/>} />
  
 
  </Routes> 
<Footer/>
 </BrowserRouter>
);



import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Cart from './components/page/Cart';
import Event from './components/page/Event';
import EventDetail from './components/page/EventDetail';
import Product from './components/page/Product';
import ProductDetail from './components/page/ProductDetail';
import Main from './components/page/Main';
import Mypage from './components/page/Mypage';
import Store from './components/page/Store';


function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/event' element={<Event />} />
          <Route path='/eventdetail/:id' element={<EventDetail />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productdetail/:id' element={<ProductDetail />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/store' element={<Store />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;

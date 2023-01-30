import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './component/layouts/Header';
import Footer from './component/layouts/Footer';

import Cart from './component/pages/Cart';
import Main from './component/pages/Main';
import Menu from './component/pages/Menu';
import Store from './component/pages/Store'
import ProductList from './component/pages/ProductList';
import ProductDetail from './component/pages/ProductDetail';



function App() {
  return (
   
    <div className='App'>
      <Header />
      <BrowserRouter> 
      
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/"} element={<Main />} />
            <Route path={"/Menu"} element={<Menu />} />
            <Route path={"/productList"} element={<ProductList />} />
            <Route path={"/productdetail"} element={<ProductDetail />} />
            <Route path={"/Store"} element={<Store />} />
      
      </BrowserRouter> 
      <Footer />
    </div>
  );
}

export default App;

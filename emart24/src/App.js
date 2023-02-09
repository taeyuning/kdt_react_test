
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';




import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Cart from './components/page/Cart';
import Event from './components/page/Event';
import EventProduct from './components/page/EventProduct';
import Main from './components/page/Main';
import Mypage from './components/page/Mypage';
import Store from './components/page/Store';



function App() {
  return (
      <div className='appWrap'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/event' element={<Event />} />
            <Route path='/eventproduct' element={<EventProduct />} />
            <Route path='/mypage' element={<Mypage />} />
            <Route path='/store' element={<Store />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  );
}
export default App;

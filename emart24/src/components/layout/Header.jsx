import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HeaderBottom from '../ui/header/HeaderBottom';
import HeaderTop from '../ui/header/HeaderTop';


// import style from './Header.module.css';

function Header() {

  return ( 
    <header>
      <HeaderTop/>
      <HeaderBottom />
    </header>
   );
}

export default Header;
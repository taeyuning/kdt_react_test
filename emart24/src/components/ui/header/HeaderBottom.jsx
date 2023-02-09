import React from 'react';
import { Link } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import style from './HeaderBottom.module.css';

function HeaderBottom() {

return(
 
<header className={style.header}>
<div className={style.contents}>

    <div className={style.logo}>
    <h1 class="logo">
            <Link to ="http://localhost:3000"> 
            <img src={require("../../../img/logo.png")} alt= " "/>
            </Link>
            </h1>

  
    <nav className={style.navigation}>
        <ul>
          <li> <Link to ='/mypage'>마이 페이지</Link></li>
          <li> <Link to ='/cart'> 장바구니 </Link></li>
          <li> <Link to ='/event'>이벤트 </Link></li>
          <li> <Link to ='/eventproduct'>행사 상품</Link></li>
          <li> <Link to = '/store'>매장 찾기 </Link></li>
        </ul>
      </nav>
    </div>
    </div>
  </header>

)
}

export default HeaderBottom;
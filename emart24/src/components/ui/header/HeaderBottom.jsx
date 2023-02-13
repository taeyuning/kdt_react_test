import React from 'react';
import { Link } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import style from './HeaderBottom.module.css';

function HeaderBottom() {

  return (
    <div className={style.headerBottomContainer}>
        <div className={style.logo}>
          <Link to="/">
            <img src={require("../../../img/logo.140.png")} alt=" " />
          </Link>
        </div>
        <nav className={style.navigation}>
          <ul>
              <li> <Link to='/mypage'> 마이 페이지</Link></li>
              <li> <Link to='/cart'> 장바구니 </Link></li>
              <li> <Link to='/event'> 이벤트 </Link></li>
              <li> <Link to='/eventproduct'> 행사 상품</Link></li>
              <li> <Link to='/store'> 매장 찾기 </Link></li>
          </ul>
        </nav>
    </div>

  )
}

export default HeaderBottom;
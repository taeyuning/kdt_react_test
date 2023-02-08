import React from 'react';

import style from './HeaderBottom.module.css';



function HeaderBottom() {

  <header className= {style.Headerbottom}>
    <div className={style.headerWrap}>
      <h1 className={style.logo}>
        <Link to={'/'}>
         <img src='./assets/img/logo.png' alt='logo' />
        </Link>
        </h1>

        <nav className={styles.navigation}>
                  <ul>
                      <li> 마이 페이지 </li>
                      <li> 장바구니  </li>
                      <li> 이벤트  </li>
                      <li> 행사 상품 </li>
                      <li> 매장 찾기  </li>
                  </ul>
              </nav>
              </div>
  </header>
}

export default HeaderBottom;
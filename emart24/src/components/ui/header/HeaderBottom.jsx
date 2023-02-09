import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import style from './HeaderBottom.module.css';

function HeaderBottom() {

return(
<header className={style.header}>
  <div className={style.contents}>
<div className={style.logo_container}>
  emart24
</div>

<nav className={style.navigation}>
<ul>
<li> 마이 페이지</li>
<li> 장바구니 </li>
<li> 이벤트 </li>
<li> 행사 상품</li>
<li> 매장 찾기 </li>

</ul>


</nav>
  </div>
  </header>

)
}

export default HeaderBottom;
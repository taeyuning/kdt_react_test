import React from 'react';

import style from '../header/HeaderTop.module.css';



function HeaderTop() {
  return ( 
    <header className={style.header}>
  <div className={style.contents}>
    
<nav className={style.navigation}>
<ul>
<li> 고객센터 </li>
<li> 이마트24소개 </li>
<li> 채용 안내 </li>


</ul>


</nav>
  </div>
  </header>

    
  
 );
}

export default HeaderTop;
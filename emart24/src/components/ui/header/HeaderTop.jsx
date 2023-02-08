import React from 'react';

import style from '../header/HeaderTop.module.css';



function HeaderTop() {
 <header className= {style.HeaderTop}>
    <div className={style.contents}> 

      <nav className={style.navigation}>
                  <ul>
                      <li> 고객센터 </li>
                      <li> 이마트 24 소개 </li>
                      <li> 채용 안내 </li>
                  </ul>
              </nav>
              </div>
  </header>
}

export default HeaderTop;
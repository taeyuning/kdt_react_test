import React from 'react';
import style from './Store.module.css';

function Store() {
    return(
        <section>
          <div className={style.storeWrap}>
          <h2>매장 찾기</h2>
          <h3>EMART24의 매장을 검색해보세요.</h3>
          </div>
          </section>
     );
}

export default Store;
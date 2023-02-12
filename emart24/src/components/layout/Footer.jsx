import React from 'react';
import style from '../layout/Footer.module.css';

function Footer() {

return (  
<footer className={style.footer}>
    <div className={style.footerWrap}>
    <h1>(주) 이마트24</h1>
    <h2>대표이사: 김장욱 / 사업자등록번호: 105-86-92454</h2>
    <h3>서울특별시 성동구 성수동 2가 281-4 푸조비즈타워 / 고객센터: 02-6916-1500 / Fax: 02-6916-1430</h3>
    <h4>COPYRIGHT (C) EMART24.ALL RIGHT RESERVED</h4>
</div>
</footer>

    ); 
}

export default Footer;
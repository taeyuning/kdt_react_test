import React from 'react';
import style from '../layout/Footer.module.css';

function Footer() {

return (  

    <footer>
        <div className={style.footerWrap}>
            <p className={style.companyName}>(주) 이마트24</p>
            <p>대표이사: 김장욱 / 사업자등록번호: 105-86-92454</p>
            <address>서울특별시 성동구 성수동 2가 281-4 푸조비즈타워 / 고객센터: 02-6916-1500 / Fax: 02-6916-1430</address>
            <p>COPYRIGHT (C) EMART24.ALL RIGHT RESERVED</p>
        </div>
    </footer>

    ); 
}

export default Footer;